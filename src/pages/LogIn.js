import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'
import '../styles/logIn.css'
import {VscGithub} from "react-icons/vsc"
const LogIn = () => {
  const {user} = UserAuth();
  const { githubSignIn } = UserAuth();
  const navigate =useNavigate()
  const handleClick = async () => {
    try {
      await githubSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate('/index')
    }
  },[navigate, user])

  return (
    <div className="log-in-page">
      <VscGithub  className="log-in-image"/>
      <h2 >ChengaraHub</h2>
      <button onClick={handleClick} className="LoginButton">Sign in with GitHub</button>
    </div>
  );
};

export default LogIn;
