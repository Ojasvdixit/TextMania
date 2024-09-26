import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const URL = "http://localhost:5000/api/auth/login";


export default function Login(props) {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/login' , {
        
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      
      console.log("login form", response);
      
      if (response.ok) {
        alert("Login Successful")
        //  props.showAlert('Login successful!', 'success');
        setUser({ email: '', password: '' });
        navigate('/');
        

      }
      else{
        alert('Invalid Credentials');
      }

      //  const result = await response.json();

       // user({ email: '', password: '' });
    }  catch (error) {
       console.log(error);
     
      // props.showAlert('Login failed', 'danger');
      }
  };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2 style={{fontSize:'45px'}}>Login</h2>
      <form onSubmit={handleSubmit} style={{marginTop:'50px'}}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-secondary">Login</button>
      </form>
    </div>
  );
}
