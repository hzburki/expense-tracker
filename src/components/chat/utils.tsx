export const formatMessageContent = (content: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return content.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-blue-100 underline hover:text-blue-50"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};
