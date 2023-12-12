import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Context} from '../Components/Context';
// import localhost from '../Config';
import "./register.css"
import registersvg from "../assets/registersvg.svg"

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [expert, setExpert] = useState('');
  const [expectedPay, setExpectedPay] = useState('');
  const [gender, setGender] = useState('');
  const [previousProjects, setPreviousProjects] = useState('');
  const [errmsg, setErrMsg] = useState('');
  const navigate=useNavigate();
  const{user,setuser}=useContext(Context);
  const handleRegister = async () => {
    try {
      const postData = {
        "name": name,
        "phoneNumber": phoneNumber,
        "email": email,
        "password": password,
        "isAdmin": "true",
        "isSite": "true",
        "experience": experience,
        "expert": expert,
        "expectedPay": expectedPay,
        "gender": gender,
        "previousProjects": previousProjects,
        "__v": 0
      };
      console.log(postData);
      const response = await axios.post(`http://localhost:8000/u/register`, postData);

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

        navigate('/home', { userData });
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
    <div className='register_cont'>
      <div className='re_left'>
        <img src={registersvg}/>
      </div>
      <div className='re_right'>
          <h1 style={{fontSize:"25px",marginBottom:"10px",fontWeight:"bold"}}>Register</h1>
          {errmsg ? <p style={{ color: 'red' }}>{errmsg}</p> : null}
          <div className='inp_re'>
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
            <input
              placeholder="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              type="text"
            />
            <input
              placeholder="Expert"
              value={expert}
              onChange={(e) => setExpert(e.target.value)}
              type="text"
            />
            <input
              placeholder="Expected Pay"
              value={expectedPay}
              onChange={(e) => setExpectedPay(e.target.value)}
              type="text"
            />
            <input
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              type="text"
            />
            <input
              placeholder="Previous Projects"
              value={previousProjects}
              onChange={(e) => setPreviousProjects(e.target.value)}
              type="text"
            />
            <button onClick={handleRegister}className='register_btn'>Register</button>
            <div style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginTop: 30 }}>
              <p>Already have an account ? <button onClick={() => navigate('/login')} style={{ color: 'blue' }}>Login</button></p>
            </div>  
          </div>
      </div>
    </div>
  );
};

export default Register;
