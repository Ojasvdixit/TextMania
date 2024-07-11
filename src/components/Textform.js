import React, { useState } from 'react';
import '../App.css';

export default function Textform(props) {
  const [text, setText] = useState('');
  const [findText, setFindText] = useState('');
  const [replaceText, setReplaceText] = useState('');

  const handleReplace = () => {
    const newText = text.replaceAll(findText, replaceText);
    setText(newText);
    props.showAlert('Text replaced secondaryfully', 'secondary');
  };

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'secondary');
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'secondary');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared', 'secondary');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard', 'secondary');
  };

  const handleSpaceClick = () => {
    let newText = text.split(/\s+/).join(' ');
    setText(newText);
    props.showAlert('Extra spaces removed', 'secondary');
  };

  const handleExtractNumbersClick = () => {
    let numbers = text.match(/\d+/g);
    if (numbers) {
      numbers = numbers.map(Number);
      setText(numbers.join(', '));
      props.showAlert('Numbers extracted', 'secondary');
    } else {
      props.showAlert('No numbers found', 'info');
    }
  };

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-2 btnCuston" onClick={handleUpperClick}>Convert to Uppercase</button>
        <button className="btn btn-secondary" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-secondary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-secondary" onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-secondary mx-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
        <button className="btn btn-secondary mx-2" onClick={handleExtractNumbersClick}>Extract Numbers</button>

        {/* Find and Replace Section */}
        <div className="my-3">
          <input
            type="text"
            className="form-control my-1"
            placeholder="Find text"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          />
          <input
            type="text"
            className="form-control my-1"
            placeholder="Replace with"
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          />
          <button className="btn btn-secondary mx-2" onClick={handleReplace}>Replace Text</button>
        </div>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the above textbox to preview it here'}</p>
      </div>
    </>
  );
}
