import React from 'react';

export default function Features() {
  return (
    <div className="container my-5">
      <h2>Features of TextUtils</h2>
      <ul>
        <li>
          <strong>Convert Text to Uppercase:</strong> Converts the entire text input to uppercase letters with a single click.
        </li>
        <li>
          <strong>Convert Text to Lowercase:</strong> Converts the entire text input to lowercase letters with a single click.
        </li>
        <li>
          <strong>Clear Text:</strong> Clears all the text from the text area, giving you a fresh start.
        </li>
        <li>
          <strong>Copy Text:</strong> Copies the current text in the text area to your clipboard.
        </li>
        <li>
          <strong>Remove Extra Spaces:</strong> Removes all the unnecessary spaces from the text, ensuring clean formatting.
        </li>
        <li>
          <strong>Extract Numbers:</strong> Finds and extracts all the numbers from the text and displays them in a comma-separated format.
        </li>
        <li>
          <strong>Find and Replace:</strong> Allows you to search for specific text and replace it with another string.
        </li>
        <li>
          <strong>Speech Recognition:</strong> Convert spoken words into text using the speech recognition feature. It automatically updates the text area with the spoken content.
        </li>
        <li>
          <strong>Text Summary:</strong> Provides a summary of the text, including the word count, character count, and estimated reading time.
        </li>
        <li>
          <strong>Preview Text:</strong> Displays a real-time preview of the text as you type or modify it in the text area.
        </li>
      </ul>
    </div>
  );
}
