import React, { useState } from "react";

import {useNavigate} from 'react-router-dom';

import Alert from "./Alert";
const  URL = "https://textmania-mzuj.onrender.com";

export default function Register(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate= useNavigate();

  const handleChange = (e) => {
    console.log(e);

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // To convert object data into JSON
      });

      //  const result = await response.json();
      
        if (response.ok) {
             alert('Registered sucessfully');
              setUser({ username: '', email: '', phone:'', password: '' });
              navigate('/login');
             }


      console.log(response);
    

      //   props.showAlert('Registered successfully!', 'success');

    } catch (error) {
      console.log("register", error);

      //  props.showAlert('Registration failed', 'danger');
    }
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h2 >Register</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            username
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          Register Now
        </button>
      </form>
    </div>
  );
}
