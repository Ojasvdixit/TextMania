export const calculateReadability = (text) => {
  const sentences = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  const syllables = text.match(/[aeiouy]{1,2}/g).length;

  const fleschKincaid = 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
  
  return fleschKincaid;
};