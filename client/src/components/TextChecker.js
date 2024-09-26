import React, { useState } from 'react';
import axios from 'axios';

function TextChecker(props) {
  const [text, setText] = useState('');

  const handleGrammarCheck = async () => {
    const apiKey = 'YOUR_API_KEY';  // Replace with your TextGears API key
    try {
      const response = await axios.get(`https://api.textgears.com/spelling`, {
        params: {
          key: apiKey,
          text: text,
          language: 'en-US'
        }
      });
      const suggestions = response.data.response.errors;
      if (suggestions.length > 0) {
        let correctedText = text;
        suggestions.forEach((error) => {
          correctedText = correctedText.replace(error.bad, error.better[0]);
        });
        setText(correctedText);
        props.showAlert('Grammar and spelling corrections applied', 'success');
      } else {
        props.showAlert('No grammar or spelling errors found', 'success');
      }
    } catch (error) {
      console.error('Error checking grammar:', error);
      props.showAlert('Failed to check grammar', 'danger');
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Function to show an intentional error
  const handleShowError = () => {
    props.showAlert('This is a test error', 'danger');
  };

  return (
    <div className="mb-3">
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
        id="textCheckerBox"
        rows="9"
        placeholder="Enter text for grammar check..."
      ></textarea>
      <button className="btn btn-secondary mx-2 mt-2" onClick={handleGrammarCheck}>Check Grammar</button>
      
      {/* Button to show an error */}
      <button className="btn btn-danger mx-2 mt-2" onClick={handleShowError}>Show Error</button>
    </div>
  );
}

export default TextChecker;
