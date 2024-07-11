const API_URL = 'https://api.languagetool.org/v2/check';

export const checkGrammarAndSpelling = async (text) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      text: text,
      language: 'en-US'
    })
  });

  const data = await response.json();
  return data;
};
