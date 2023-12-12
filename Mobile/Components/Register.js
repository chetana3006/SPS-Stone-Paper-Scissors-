import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ToastAndroid } from 'react-native';
import axios from 'axios';
import localhost from '../Config';
import { ScrollView } from 'react-native-gesture-handler';
import Context from "../Components/Context";

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState('false');
  const [isSite, setIsSite] = useState('false');
  const [experience, setExperience] = useState('');
  const [expert, setExpert] = useState('');
  const [expectedPay, setExpectedPay] = useState('');
  const [gender, setGender] = useState('');
  const [previousProjects, setPreviousProjects] = useState('');
  const [errmsg, setErrMsg] = useState('');
  const{user,setuser}=useContext(Context  );

  const handleRegister = async () => {
    try {
      const postData = {
        "name": name,
        "phoneNumber": phoneNumber,
        "email": email,
        "password": password,
        "isAdmin": isAdmin,
        "isSite": isSite,
        "experience": experience,
        "expert": expert,
        "expectedPay": expectedPay,
        "gender": gender,
        "previousProjects": previousProjects,
        "__v": 0
      };

      const response = await axios.post(`http://${localhost}/u/register`, postData);

      if (response.data.message === 'success') {
        console.log(response.data.data);
        if(response.data.data.isAdmin=="true" && response.data.data.isSite=="true" )setuser({user:response.data.data.name,id:response.data.data._id,isSite:response.data.data.isSite,isAdmin:response.data.data.isAdmin,kahootcode:response.data.data.kahootcode});
        else if(response.data.data.isSite=="true")setuser({user:response.data.data.name,id:response.data.data._id,isSite:response.data.data.isSite,kahootcode:response.data.data.kahootcode});
         else if(response.data.data.isAdmin=="true")setuser({user:response.data.data.name,id:response.data.data._id,isAdmin:response.data.data.isAdmin,kahootcode:response.data.data.kahootcode});
        else setuser({user:response.data.data.name,id:response.data.data._id,kahootcode:response.data.data.kahootcode})
        
        // console.log(response.data.data._id);
        navigation.navigate('Maintab', { "userData":response.data.data });
        ToastAndroid.show('Message sent successfully!', ToastAndroid.SHORT);
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
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      {errmsg ? <Text style={styles.error}>{errmsg}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      {/* Additional Fields */}
      <TextInput
        style={styles.input}
        placeholder="Experience"
        value={experience}
        onChangeText={text => setExperience(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expertise"
        value={expert}
        onChangeText={text => setExpert(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expected Pay"
        value={expectedPay}
        onChangeText={text => setExpectedPay(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Previous Projects"
        value={previousProjects}
        onChangeText={text => setPreviousProjects(text)}
      />
      {/* Admin and Site Fields */}
      <TextInput
        style={styles.input}
        placeholder="Is Admin (true/false)"
        value={isAdmin}
        onChangeText={text => setIsAdmin(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Is Site (true/false)"
        value={isSite}
        onChangeText={text => setIsSite(text)}
      />
      {/* Register Button */}
      <Button title="Register" onPress={handleRegister} />
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    height:"100%",
    marginTop:"10%"
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
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
});

export default Register;
