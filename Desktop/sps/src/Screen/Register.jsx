import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Context} from '../Components/Context';
// import localhost from '../Config';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const{user,setuser}=useContext(Context);
  const handleRegister = async () => {
    try {

      const response = await axios.post(`http://localhost:8000/u/register`, {
        name,
        phoneNumber,
        email,
        password,
        isAdmin: true,
        isSite: true,
      });

      if (response.data.message === 'success') {
        console.log(response.data.data,response.data.message);
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
        console.error('Registration failed');
        setErrMsg(response.data.message);
        setTimeout(() => {
          setErrMsg('');
        }, 2000);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {errmsg ? <p style={{ color: 'red' }}>{errmsg}</p> : null}
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={handleRegister}>Register</button>
      <div style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 30 }}>
        <p>Already have an account?</p>
        <button onClick={() => navigate('/login')} style={{ color: 'blue' }}>Login</button>
      </div>
    </div>
  );
};

export default Register;
