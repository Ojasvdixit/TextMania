export const getSeoSuggestions = (text, keyword) => {
  let suggestions = [];

  if (!text.includes(keyword)) {
    suggestions.push(`The keyword "${keyword}" is not found in the text.`);
  }

  if (!text.includes(keyword.toLowerCase())) {
    suggestions.push(`Consider using the keyword "${keyword}" in lowercase.`);
  }

  // Add more SEO rules as needed

  return suggestions;
};
