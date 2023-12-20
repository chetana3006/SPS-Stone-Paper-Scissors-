import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import localhost from '../Config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Context from "../Components/Context";
const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrMsg] = useState('');
  const{user,setuser}=useContext(Context);



  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://${localhost}/u/login`, {
        phoneNumber,
        password,   
      });

      if (response.data.message === 'success') {
        console.log('login page',response.data.data);
        if(response.data.data.isAdmin=="true" && response.data.data.isSite=="true" )setuser({user:response.data.data.name,id:response.data.data._id,isSite:response.data.data.isSite,isAdmin:response.data.data.isAdmin,kahootcode:response.data.data.kahootcode});
        else if(response.data.data.isSite=="true")setuser({user:response.data.data.name,id:response.data.data._id,isSite:response.data.data.isSite,kahootcode:response.data.data.kahootcode});
         else if(response.data.data.isAdmin=="true")setuser({user:response.data.data.name,id:response.data.data._id,isAdmin:response.data.data.isAdmin,kahootcode:response.data.data.kahootcode});
        else setuser({user:response.data.data.name,id:response.data.data._id,kahootcode:response.data.data.kahootcode})
        
        // console.log(response.data.data._id);
        navigation.navigate('Maintab', { "userData":response.data.data });
      } else {
        console.error('Invalid credentials');
        setErrMsg(response.data.message);
        setTimeout(() => {
          setErrMsg('');
        }, 2000);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back !</Text>
      {errmsg ? <Text style={styles.error}>{errmsg}</Text> : null}
      <Text style={styles.lable}>Phone Number :</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        // keyboardType="numeric"
        />
        <Text style={styles.lable}>Password :</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
        <Text>New Account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    gap:20
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333333',
  },
  error: {
    color: 'red',
    marginBottom: 20,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 50,
    padding:13,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  loginText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  registerText: {
    color: '#007bff',
    marginLeft: 5,
    fontSize: 16,
  },
  lable:{
    // marginRight:"70%"
    alignItems:"flex-start",
    justifyContent:"flex-start",
    position:"relative",
    left:"10px",
    width:"100%",
    fontWeight:"600"
    // fontSize:"30px"
  }
});

export default Login;
