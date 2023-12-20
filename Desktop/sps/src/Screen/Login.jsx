import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import localhost from '../Config';
import loginsvg from "../assets/loginsvg.svg"
import  {Context}  from "../Components/Context";
import { useNavigate } from 'react-router-dom';
import "./login.css";
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrMsg] = useState('');
  const { setuser } = useContext(Context);
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  // let projectnames=[]

  useEffect(() => {
    axios.get('https://homepage-uolh.onrender.com/home/all')
      .then(response => {
        // setProjects(response.data.projects);
        // console.log(response.data.projects[0].projectName);
        for(let i=0;i<response.data.projects.length;i++)
        {
          setProjects(prevProjects => [...prevProjects, response.data.projects[i].projectName]);

        }
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);
  const postname=(Projectname)=>{
    axios.post('http://localhost:8000/set-db-name',{"dbName":Projectname})
    .then(response => {
     alert("Project Choosed")
      // navigate("/Projects")
    })
    .catch(error => {
      console.error('Error fetching complaints:', error);
    });
    console.log(Projectname);
  }
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

        navigate('/home', { userData });
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
    <div className='login_cont'>
      <div className='login_left'>
        <img src={loginsvg} className='loginsvg'/>
      </div>
      <div className='login_right'>
        <h1 className='head_lo'>Login</h1>
        {errmsg ? <p>{errmsg}</p> : null}
        <div className='input_login'>
          <h1>Phone Number :</h1>
        <input
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <h1>Password :</h1>
          <input
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            />
            <h1>Choose Project :</h1>
        <div className='dbcont'>
        {projects.map((db)=>(
            <div className='db'>
              <h1 onClick={()=>{postname(db)}} id="roomname">{db}</h1>
            </div>
          ))}
          
        </div>
          <button onClick={handleLogin}>Login</button>
          <div className='btn_lo'>
            <p>New Account ? <button onClick={() => navigate("/register")}>
              <p style={{color:"blue"}}> <span> </span>Register</p>
            </button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
