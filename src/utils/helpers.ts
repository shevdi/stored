

export const stripAppPath = (url: string) => {
  return url.replace('/stored', '') || '/';
};
