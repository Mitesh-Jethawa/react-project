export const getWordCount = (text: string) => {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
};
