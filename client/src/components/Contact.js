import React, { useState } from 'react';

export default function Contact(props) {
  const [statusMessage, setStatusMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success' or 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1d59296c-8f2b-465b-bb9d-001d7c885447"); // Corrected access key format

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        setStatus('success');
        setStatusMessage("Your message has been sent successfully!");
        // Clear form fields
        event.target.reset();
      } else {
        setStatus('error');
        setStatusMessage("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2 className="my-3">Contact Us</h2>

      {/* Display success or error message */}
      {statusMessage && (
        <div className={`alert alert-${status === 'success' ? 'success' : 'danger'}`} role="alert">
          {statusMessage}
        </div>
      )}

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name"
            style={{ backgroundColor: props.mode === 'dark' ? '#444' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email"
            style={{ backgroundColor: props.mode === 'dark' ? '#444' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control" 
            id="message" 
            name="message"
            rows="4"
            style={{ backgroundColor: props.mode === 'dark' ? '#444' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            autoComplete='off'
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
}
