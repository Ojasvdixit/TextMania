import React, { useState } from 'react';

export default function About() {
  const [mystyle, setmyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btntext, setbtntext] = useState('Enable Dark Mode');

  const togglestyle = () => {
    if (mystyle.color === 'white') {
      setmyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setbtntext('Enable Dark Mode');
    } else {
      setmyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setbtntext('Enable Light Mode');
    }
  };

  return (
    <>
      <div className="container" style={mystyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={mystyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                TextUtils Application
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>TextUtils is a React application designed to provide various text manipulation features to the user.</strong> 
                It allows users to input text and perform several operations on it, such as converting to uppercase, converting to lowercase, 
                clearing the text, copying the text, removing extra spaces, and extracting numbers. The component also provides a summary of the text, 
                including word count, character count, and an estimated reading time.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Features
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>TextUtils offers a range of features to enhance your text editing experience:</strong>
                <ul>
                  <li>Convert text to uppercase or lowercase</li>
                  <li>Clear the text with one click</li>
                  <li>Copy the text to clipboard</li>
                  <li>Remove extra spaces from the text</li>
                  <li>Extract numbers from the text</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Blog
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Explore our blog for articles on text manipulation, productivity tips, and more.</strong>
                <p>Our blog covers various topics to help you make the most of TextUtils and improve your productivity:</p>
                <ul>
                  <li><a href="/blog/text-manipulation-tips" style={{ color: mystyle.color }}>Text Manipulation Tips</a></li>
                  <li><a href="/blog/productivity-hacks" style={{ color: mystyle.color }}>Productivity Hacks</a></li>
                  <li><a href="/blog/latest-updates" style={{ color: mystyle.color }}>Latest Updates</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Contact Us
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>We'd love to hear from you!</strong>
                <p>If you have any feedback, questions, or need support, feel free to reach out:</p>
                <ul>
                  <li>Email: support@textutils.com</li>
                  <li>Phone: +123 456 7890</li>
                  <li>Address: 123 TextUtils Street, Text City, TX 12345</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button onClick={togglestyle} className="btn btn-success my-4 mx-1">
            {btntext}
          </button>
        </div>
      </div>
    </>
  );
}
