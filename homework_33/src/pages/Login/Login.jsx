import {React, useState} from "react";
import { Link, Navigate } from "react-router-dom";
import './Login.scss';

function Login() {
  const [TOKEN, setToken] = useState(localStorage.getItem("AUTH_TOKEN"));
  
  const createToken = () => {
    localStorage.setItem("AUTH_TOKEN", "blabla");
    setToken(localStorage.getItem("AUTH_TOKEN"));
    window.open('/'); // Navigate пробовала, отрабатывает не так как надо, так что оставила window.open
  }

  return TOKEN ? (
    <div className="login-page-wrapper">
      <h1>Hi, friend. You are already logged in.</h1>
      <Link to='/'>Home Page</Link>
    </div>
  ) : (
    <div className="login-page-wrapper">
      <h1>Hi, friend. You should log in.</h1>
      <button style={{display: "block"}} onClick={createToken} type="button">Quick login.</button>
      <Link to='/'>Home Page</Link>
    </div>
  );
}

export default Login;
