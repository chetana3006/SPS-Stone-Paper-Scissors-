import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LabourMessage() {
  const [messages, setMessages] = useState([]);
  const [replyMessage, setReplyMessage] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [toggle, setToggle] = useState(false); // Renamed settoggle to setToggle

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
    setToggle(prevToggle => !prevToggle); // Use functional update for toggle
    setReplyMessage('');
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
          alert("message sent")
          setReplyMessage("")
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
    }
  };

  return (
    <div>
      <h1>Messages for Admin</h1>
      <div>
        {messages.map(message => (
          <div key={message._id}>
            <p>User: {message.user}</p>
            <p>Message: {message.message}</p>
            <p>Time: {new Date(message.createdAt).toLocaleString()}</p>
            <button onClick={() => handleReply(message.user)}>Reply</button>
            <hr />
          </div>
        ))}
      </div>
        {toggle ? (
          <div>
            <h2>Reply to {selectedUser}</h2>
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
