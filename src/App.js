import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type  
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      document.title = 'TextUtils Dark Mode';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils Light Mode';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" abouttext="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} alert={alert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
