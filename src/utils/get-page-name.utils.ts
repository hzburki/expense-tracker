export const getPageName = (pathname: string): string => {
  // Remove leading and trailing slashes and split into segments
  const segments = pathname.replace(/^\/|\/$/g, '').split('/');

  // If no segments, return 'Home'
  if (!segments[0]) return 'Finn AI';

  // Get the first segment and capitalize it
  return segments[0].charAt(0).toUpperCase() + segments[0].slice(1);
};
