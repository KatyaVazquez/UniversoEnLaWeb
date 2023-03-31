import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from 'axios'

import './Register.css';

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
      setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };



  const handleRegisterSubmit = (e) => {
      e.preventDefault();
      console.log(`First Name: ${username}`);
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      console.log(`Confirm Password: ${confirmPassword}`);
      // Here you would typically make a network request to create a new user
      // and handle any validation errors that may be returned.

      const data = { username, email, password, confirmPassword };

      axios.post("http://localhost:8000/api/register", data, { withCredentials: true })
          .then((result) => result.data)
          .then((response) => {
              console.log(response);
              setFormErrors({});
              navigate("/")
          })
          .catch((errors) => {
              console.log(errors);
              console.log(errors.response.data.errors);
              if (errors.response.data.code) {
                  setFormErrors({ email: { message: "email already taken" } })
              }
              else {
                  setFormErrors(errors.response.data.errors);
              }
          })
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Register</h1>
        <form onSubmit={handleRegisterSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                margin="normal"
                fullWidth
                required
 
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" id="email" label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                margin="normal"
                fullWidth
                


            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" id="password" label="Password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                margin="normal"
                fullWidth

                required

            />
          </div>
          <div className="form-group">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input type="password" id="confirmPassword" label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              margin="normal"
              fullWidth
              required

                          />
          </div>
          <button type="submit">To register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
