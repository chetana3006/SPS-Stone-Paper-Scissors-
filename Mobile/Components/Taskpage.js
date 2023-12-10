import { View, Text, Image, StyleSheet, ToastAndroid, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import taskimg from "../assets/8454.jpg";
import Context from './Context';
import Toast from 'react-native-toast-message'
import localhost from '../Config';
import axios from 'axios';

const Taskpage = ({navigation}) => {
  const showToast = (text) => {
    console.log(`toast`);
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }
  const addtoroom=()=>{
    axios.post("http://localhost:8000/site/afterinviteroom",{
      "roomId":user.kahootcode,
      "userId":user.id
    })
    navigation.navigate('Kahoot');
  }
  // const sendRequest = async () => {
  //   try {
  //     const url = `http://${localhost}/s/sites`; 
    
  //     const response = await axios.post(url,{
  //       "user": user.id 
  //     });
  //     // console.log(response);
  //     showToast("Request sent successfully"); 
  //   } catch (error) {
  //     // console.log(error);
  //     showToast("Failed to send request!"); 
      
  //   }
  // };

  // const swithpage=()=>{
  //   navigation.navigate('TaskRequest');
  // }


  const {user,setuser}=useContext(Context);
  return (
      <View style={styles.container}>
      <Text>{user.kahootcode}</Text>
      <Text>{user.user}</Text>
      <Image source={taskimg} style={styles.taskimg} />
      {
        user.kahootcode!="no"?
        <View>
          <Text>You have request to join in room</Text>
          <Button title='join room' onPress={addtoroom} />
        </View>:
        <View>
          <Text>No room request yet!</Text>
        </View>
      }
      </View>
  )
}

const styles = StyleSheet.create({
  taskimg: {
    width: '100%',
    height: '50%', 
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  }
})

export default Taskpage
