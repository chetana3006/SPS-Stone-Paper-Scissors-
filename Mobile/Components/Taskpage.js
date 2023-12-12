import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ToastAndroid, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import Context from './Context';
import localhost from '../Config';
import taskimg from '../assets/8454.png';
import nullimage from '../assets/null.png';
import join from '../assets/join.png';
import { ScrollView } from 'react-native-gesture-handler';

const Taskpage = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);

  const showToast = (text) => {
    console.log(`toast`);
    ToastAndroid.show(text, ToastAndroid.SHORT);
  };

  const addtoroom = () => {
    console.log("user id"+"  "+ user.kahootcode+" "+user.id);
    axios
      .post(`http://${localhost}/site/afterinviteroom`, {
        roomId: user.kahootcode,
        userId: user.id,
      })
      .then((res) => {
        console.log(res.data.updatedRoom.roomName);
        console.log(res.data.updatedRoom.siteEngineerName);
        navigation.navigate('Kahoot', {
          roomname: res.data.updatedRoom.roomName,
          siteengineername: res.data.updatedRoom.siteEngineerName,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const { user } = useContext(Context);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        if (user.isSite === 'true') {
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
      const response = await axios.post(`http://${localhost}/site/deleteroomsiteEngineer`, {
        roomId: roomId,
      });
      if (response.status === 200) {
        // If successful, update the rooms list by refetching
        // fetchRooms();
        alert('Deleted room');
        console.log('Room deleted');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Hey <Text style={styles.username}>{user.user}</Text>!</Text>
      <Image source={taskimg} style={styles.taskImage} />

      {user.kahootcode !== 'no' ? (
        <View style={styles.joinRoomContainer}>
          <Text style={styles.joinRoomText}>You can join a room by clicking join button!</Text>
          <Image source={join} style={styles.roomimg}/>
          <Button title="Join Room"  onPress={addtoroom} />
        </View>
      ) : (
        <View style={styles.noRoomContainer}>
          {user.isSite !== 'true' ? (
            <View style={styles.noRequestContainer}>
              <Text style={styles.noRequestText}>No room requests yet!</Text>
              <Image source={nullimage} style={styles.nullImage} />
            </View>
          ) : (
            <View />
          )}
        </View>
      )}

      {user.isSite === 'true' && (
        <View style={styles.siteEngineerRoomsContainer}>
          <Text style={styles.siteEngineerRoomsText}>Rooms for Site Engineer:</Text>
          {rooms.map((room) => (
            <View key={room._id} style={styles.roomItem}>
              <Text>Room Name: {room.roomName}</Text>
              <Text>Site Engineer: {room.siteEngineerName}</Text>
              <Button title="Delete" onPress={() => handleDeleteRoom(room._id)} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8',
    padding: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  username:{
    fontSize:30,
    color:"#5FBDFF",

  },
  greetingText: {
    alignSelf: 'flex-start',
    fontSize: 25,
    marginBottom: 10,
  },
  taskImage: {
    width: '100%',
    height: '50%',
    marginBottom: 20,
  },
  joinRoomContainer: {
    marginBottom: 10,
    flex:1,
    // backgroundColor:"red",
    alignItems:"center",
    gap:0,

  },
  joinRoomText: {
    fontSize: 18,
    marginBottom: 0,
  },
  noRoomContainer: {
    flex: 1,
    alignItems: 'center',
  },
  noRequestContainer: {
    flex: 1,
    alignItems: 'center',
  },
  noRequestText: {
    fontSize: 20,
    marginBottom: 20,
  },
  nullImage: {
    width: 150,
    height: 150,
  },
  roomimg: {
    width: 200,
    height: 200,
  },
  siteEngineerRoomsContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    position:"absolute",
    bottom:"20%"
  },
  siteEngineerRoomsText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  roomItem: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor:"white",
    gap:10,
    width:"100%",
    padding: 10,
  },
  addroom:{
    backgroundColor:"green",
    color:"red",

  }
});

export default Taskpage;
