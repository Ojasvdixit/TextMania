export const calculateKeywordDensity = (text, keyword) => {
  const words = text.split(/\s+/).filter(word => word.length > 0).length;
  const keywordCount = text.split(new RegExp(`\\b${keyword}\\b`, 'gi')).length - 1;

  return (keywordCount / words) * 100;
};