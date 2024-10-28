import React, { useState } from 'react';
import '../src/CSS/App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import Footer from './components/Footer';
import Features from './components/Features';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from'./components/Register';

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

  // const isAuthenticated = localStorage.getItem('user');

  return (
    <>
      <Router>
        <Navbar title="TextMania" abouttext="About" mode={mode} toggleMode={toggleMode}
       />
        <Alert alert={alert} />
        <div className="bgImage">
        <div className=" container" >
              
              <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
                <Route exact path="/features" element={<Features />} />
                <Route exact path="/contact" element={<Contact />} />

                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />

              

              </Routes>
            </div>

            </div>
            <Footer></Footer>
         
          </Router>

    
       
    </>
  );
}

export default App;
