import React, { useContext, useState } from 'react';
import axios from 'axios';
import localhost from '../Config';
import  {Context}  from "../Components/Context";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrMsg] = useState('');
  const { setuser } = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://localhost:8000/u/login`, {
        phoneNumber,
        password,
      });

      if (response.data.message === 'success') {
        console.log('login page', response.data.data);
        const userData = response.data.data;

        if (userData.isAdmin === "true" && userData.isSite === "true") {
          setuser({ user: userData.name, id: userData._id, isSite: userData.isSite, isAdmin: userData.isAdmin });
        } else if (userData.isSite === "true") {
          setuser({ user: userData.name, id: userData._id, isSite: userData.isSite });
        } else if (userData.isAdmin === "true") {
          setuser({ user: userData.name, id: userData._id, isAdmin: userData.isAdmin });
        } else {
          setuser({ user: userData.name, id: userData._id });
        }

        navigate('/', { userData });
      } else {
        console.error('Invalid credentials');
        setErrMsg(response.data.message);

        // Clear the error message after 2 seconds
        setTimeout(() => {
          setErrMsg('');
        }, 2000);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {errmsg ? <p>{errmsg}</p> : null}
      <input
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={handleLogin}>Login</button>
      <div>
        <p>New Account ?</p>
        <button onClick={() => navigate("/register")}>
          <p>Register</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
