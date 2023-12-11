import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Context from './Context';
import axios from 'axios';
import localhost from '../Config';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const Kahootroom = ({route,navigation}) => {
  const { roomname,siteengineername } = route.params; 

  const { user, setuser } = useContext(Context);
  const kahootid = user.kahootcode;
  const [message, setMessage] = useState('');
  const [rendermsgs, setrendermsgs] = useState([]);
  console.log(kahootid);
  useEffect(() => {
    axios.post(`http://${localhost}/site/getAllMessages`, {
      roomId: kahootid,
    })
    .then((res) => {
      setrendermsgs(res.data.messages);
      console.log(rendermsgs);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);

  const postMessage = async () => {
    try {
      const response = await axios.post(`http://${localhost}/site/addMessage`, {
        userId: user.id,
        message: message,
        roomId: kahootid,
      });
      console.log(response.data);
      alert('Message added');
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex:0.1,alignSelf:"center",backgroundColor:"white",width:"100%",textAlign:"center",padding:10,fontSize:20,alignItems:"center",marginBottom:10}}>
      <Text>Room Name: <Text style={{fontSize:20}}>{roomname}</Text></Text>
      <Text>Site Engineer: <Text style={{fontSize:20}}>{siteengineername}</Text></Text>
      </View>
      <ScrollView style={styles.messageContainer}>
        {rendermsgs.map((msg) => (
          <View
          key={msg._id}
          style={[
            styles.chatBubble,
            msg.userId._id === user.id ? styles.currentUserBubble : styles.otherUserBubble,
          ]}
          >
            {/* <Text>{user.id}</Text> */}
            <Text style={msg.userId._id === user.id ? styles.currentUserText : styles.otherUserText}>
              {msg.userId.name}
            </Text>
            <Text style={msg.userId === user.id ? styles.currentUserText : styles.otherUserText}>
              {msg.message}
            </Text>
          </View>
        ))}
      </ScrollView>
          <View style={{ alignSelf:"center",backgroundColor: '#ffffff',width:"100%",padding:10,position:"absolute",bottom:1}}>
          <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Button title="Send" onPress={postMessage} />
      </View>
      <Text></Text>
        <Button title="Complaint"  onPress={()=>{navigation.navigate("Requirements")}} />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e8f4f8',
    },
  messageContainer: {
    flex: 0.9,
    marginBottom: 20,
  },
  chatBubble: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  currentUserBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
    marginLeft: 50,
  },
  currentUserText: {
    color: '#000',
    fontWeight: 'bold',
    alignSelf:"flex-start"
  },
  otherUserBubble: {
    backgroundColor: '#EAEAEA',
    alignSelf: 'flex-start',
    marginRight: 50,
  },
  otherUserText: {
    color: '#000',
    fontWeight: 'normal',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius:15
  },
});

export default Kahootroom;
