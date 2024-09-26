// SpeechRecognitionControl.js
import React, { useState, useEffect } from 'react';

const SpeechRecognitionControl = ({ onTranscriptUpdate, mode }) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }

    const recog = new SpeechRecognition();
    recog.continuous = true; // Ensure continuous recognition
    recog.interimResults = true;

    recog.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      onTranscriptUpdate(transcript);
    };

    recog.onerror = (event) => {
      console.error('SpeechRecognition error:', event.error);
      // Optionally handle errors or display alerts to the user
    };

    recog.onend = () => {
      if (isListening) {
        // Automatically restart recognition if still listening
        recog.start();
      }
    };

    setRecognition(recog);

    return () => {
      if (recog) recog.stop();
    };
  }, [onTranscriptUpdate, isListening]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="my-3">
      <button
        className={`btn ${isListening ? 'btn-danger' : 'btn-primary'} mx-2`}
        onClick={isListening ? stopListening : startListening}
      >
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
    </div>
  );
};

export default SpeechRecognitionControl;
