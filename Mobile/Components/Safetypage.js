import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Context from './Context';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import localhost from '../Config';


const Safetypage = ({ navigation }) => {
  const [message, setMessage] = useState([]);
  const {user,setuser}=useContext(Context);
  const [adminmes,setadminmes]=useState([]);
  useEffect(()=>{
    axios.get(`http://${localhost}/a/getmessage/${user.id}`).then((res)=>{
      setadminmes(res.data);
      console.log(res.data);
    })
  },[])
  const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };
  const nearbyLocations = [
    { latitude: 37.35, longitude: -122.03 },
    { latitude: 37.34, longitude: -122.02 },
    { latitude: 37.32, longitude: -122.01 },
    { latitude: 37.33, longitude: -122.05 },
    { latitude: 37.36, longitude: -122.0 },
  ];
  const sendmethod = () => {
    axios.post(`http://${localhost}/a/userpostadmin`,{"user":user.id,"message":message,"isAdmin":false}).then((res)=>{
      ToastAndroid.show('Message sent successfully!', ToastAndroid.SHORT);

  }).catch((e)=>{
      
      alert('Some error occured!');
    })
  };

  const goToAdminMessages = () => {
    navigation.navigate('Adminmessages');
  };

  return (
    <View style={styles.cont}>
      <View style={styles.safety}>
        <TouchableOpacity onPress={goToAdminMessages}>
          <Text style={adminmes.length!=0?styles.messageiruku:styles.messageilla}>{` ${adminmes.length} Messages from Admin`}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={()=>navigation.navigate('Danger')}>
          <Text>GO TO DANGER </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textinput}>
        <TextInput
          value={message}
          placeholder='Chat with admin...'
          onChangeText={(text) => setMessage(text)}
          multiline={true}
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendmethod}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  textinput: {
    flex: 0.1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  safety: {
    flex: 0.9,
  },
  input: {
    width: '90%',
    flex: 1,
    height:40,
    borderWidth: 1,
    borderColor: '#0D1282',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  sendButton: {
    borderRadius: 25,
    backgroundColor: '#0D1282',
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 2,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageiruku:{
    color:"red",
    alignSelf:"flex-end",
    fontSize:15,
    padding:10,
  },
  messageilla:{
    color:"black",
    fontSize:15,
    alignSelf:"flex-end"
  },
  button:{
    backgroundColor:"#FF7F7F",
    width:"fit-content",
    padding:10,
    marginHorizontal:40,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,

  }
});

export default Safetypage;
