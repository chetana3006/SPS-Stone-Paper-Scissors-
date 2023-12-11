import { View, Text, Image, StyleSheet, ToastAndroid, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import taskimg from "../assets/8454.jpg";
import Context from './Context';
import Toast from 'react-native-toast-message'
import localhost from '../Config';
import axios from 'axios';

const Taskpage = ({navigation}) => {
  const [rooms, setRooms] = useState([]);

  const showToast = (text) => {
    console.log(`toast`);
    ToastAndroid.show(text, ToastAndroid.SHORT);
  }
  const addtoroom=()=>{
    axios.post(`http://${localhost}/site/afterinviteroom`,{
      "roomId":user.kahootcode,
      "userId":user.id
    }).then((res)=>{
      console.log(res.data.updatedRoom.roomName);
      console.log(res.data.updatedRoom.siteEngineerName);
      navigation.navigate('Kahoot',{"roomname":res.data.updatedRoom.roomName,"siteengineername":res.data.updatedRoom.siteEngineerName});

    }).catch((e)=>{
      console.log(e);
    })
  }
  const {user,setuser}=useContext(Context);
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        if (user.isSite === "true") {
          const response = await axios.get(`http://${localhost}/site/siteEngineerroom`);
          if (response.data.rooms) {
            setRooms(response.data.rooms);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchRooms();
  }, [user.isSite]);
  const handleDeleteRoom = async (roomId) => {
    console.log(roomId);
    try {
      const response = await axios.post(`http://${localhost}/site/deleteroomsiteEngineer`, 
        { "roomId": roomId }
      );
      if (response.status === 200) {
        // If successful, update the rooms list by refetching
        // fetchRooms();
        alert("deleted room")
        console.log("Room deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
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

{user.isSite === "true" && (
        <View>
          <Text>Rooms for Site Engineer:</Text>
          {rooms.map((room) => (
            <View key={room._id}>
              <Text>Room Name: {room.roomName}</Text>
              <Text>Site Engineer: {room.siteEngineerName}</Text>
              <Button
                title="Delete"
                onPress={() => handleDeleteRoom(room._id)} // Pass room ID for deletion
              />
            </View>
          ))}
        </View>
      )}

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
