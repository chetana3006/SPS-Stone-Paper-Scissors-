import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./labourmsg.css"
function LabourMessage() {
  const [messages, setMessages] = useState([]);
  const [replyMessage, setReplyMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [toggle, setToggle] = useState(false); 

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios.get('http://localhost:8000/a/msgforadmin')
      .then(response => {
        setMessages(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  };

  const handleReply = (user) => {
    setSelectedUser(user);
    setToggle(prevToggle => !prevToggle); 
    setReplyMessage('');
  };
  const handledelete = (message) => {
    axios.post('http://localhost:8000/a/deletemsgfromadmin', {
      "userid": message.user._id,
      "messageid": message._id
    })
      .then(response => {
        const updatedMessages = messages.filter(msg => msg._id !== message._id);
        setMessages(updatedMessages);
        alert("Deleted successfully");
      })
      .catch(error => {
        console.error('Error deleting message:', error);
      });
  };
  
  const sendMessage = () => {
    if (selectedUser && replyMessage.trim() !== '') {
      const data = {
        "user": selectedUser,
       "message": replyMessage,
      };

      axios.post('http://localhost:8000/a/postmessage', data)
        .then(response => {
          // Message sent successfully, update messages
          fetchMessages();
          alert("Message sent")
          setReplyMessage("")
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
    }
  };

  return (
    <div className='lab_cont'>
      <h1 className="heading">Messages for Admin</h1>
      <div className='msg_cont'>
        {messages.map(message => (
          <div key={message._id} className='map_msg'>
            <p className="username">{message.user.name}</p>
            <p className="msg">{message.message}</p>
            <p className="time"> {new Date(message.createdAt).toLocaleString()}</p>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <button onClick={() => handleReply(message.user)} className="reply">Reply</button>
            <button onClick={() => handledelete(message)} className="delete">Delete</button>
           </div>
            <hr />
          </div>
        ))}
      </div>
        {toggle ? (
          <div className="toggleinput">
            <h2>Reply to {selectedUser.name}</h2>
            <input
              type="text"
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your reply..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        ) : (
          <h1></h1>
        )}

    </div>
  );
}

export default LabourMessage;
