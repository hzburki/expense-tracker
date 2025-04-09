import { useState, useRef, useEffect } from 'react';

export const useAudioRecording = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioPermission, setAudioPermission] = useState<boolean | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [showMicPermissionWarning, setShowMicPermissionWarning] = useState(false);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    const storedPermission = localStorage.getItem('microphonePermission');

    if (storedPermission) {
      setAudioPermission(storedPermission === 'granted');
    } else {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => {
          setAudioPermission(true);
          localStorage.setItem('microphonePermission', 'granted');
        })
        .catch((err: Error) => {
          console.error('Microphone permission error:', err);
          setAudioPermission(false);
          localStorage.setItem('microphonePermission', 'denied');
        });
    }
  }, []);

  const startRecording = async () => {
    if (!audioPermission) {
      setShowMicPermissionWarning(true);
      setTimeout(() => setShowMicPermissionWarning(false), 3000);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(audioBlob);
        audioChunksRef.current = [];
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (err: unknown) {
      const error = err as Error;
      console.error('Error starting recording:', error);
      setAudioPermission(false);
      localStorage.setItem('microphonePermission', 'denied');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
      mediaRecorder.stream.getTracks().forEach(track => track.stop());
    }
  };

  return {
    isRecording,
    audioPermission,
    audioBlob,
    setAudioBlob,
    showMicPermissionWarning,
    startRecording,
    stopRecording,
  };
};
