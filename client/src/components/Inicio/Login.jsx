import React, { useContext, useEffect, useState } from "react";



import axios from 'axios'
import { FirstContext } from "../../context/FirstContext";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const { setUser } = useContext(FirstContext);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
      e.preventDefault();
      const data = { email, password };

      axios.post("http://localhost:8000/api/login", data, { withCredentials: true })
          .then((result) => result.data)
          .then((response) => {
              console.log(response);
              setFormErrors({});
              setUser(response);
              sessionStorage.setItem("user", JSON.stringify(response));
              navigate("/AstronomyPicture")
          })
          .catch((errors) => {
              console.log(errors.response.data);
              setFormErrors(errors.response.data);
          })
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="text"
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                margin="normal"
                fullWidth
                error={formErrors.email != null}
                helperText={formErrors.email?.message}           
            required />
            <p>{formErrors.email?.message}</p>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input label="Password"
                variant="outlined"
                value={password} 
                onChange={handlePasswordChange}
                margin="normal"
                fullWidth
                type="password"
                required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

