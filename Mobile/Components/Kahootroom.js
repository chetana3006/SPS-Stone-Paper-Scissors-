import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Context from './Context';
import axios from 'axios';
import localhost from '../Config';
import { FlatList } from 'react-native-gesture-handler';

const Kahootroom = ({route}) => {
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
      <Text>{roomname}</Text>
      <Text>{siteengineername}</Text>
      <View style={styles.messageContainer}>
        {rendermsgs.map((msg) => (
          <View
          key={msg._id}
          style={[
            styles.chatBubble,
            msg.userId._id === user.id ? styles.currentUserBubble : styles.otherUserBubble,
          ]}
          >
            <Text>{user.id}</Text>
            <Text style={msg.userId._id === user.id ? styles.currentUserText : styles.otherUserText}>
              {msg.userId.name}
            </Text>
            <Text style={msg.userId === user.id ? styles.currentUserText : styles.otherUserText}>
              {msg.message}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Button title="Send" onPress={postMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  messageContainer: {
    flex: 1,
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
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Kahootroom;
