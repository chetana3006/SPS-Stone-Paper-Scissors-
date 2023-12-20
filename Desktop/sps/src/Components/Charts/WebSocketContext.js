import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a WebSocket context
const WebSocketContext = createContext();

// WebSocket provider component
export const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Replace 'ws://localhost:5000' with your WebSocket server URL
    const newSocket = new WebSocket('ws://localhost:5000');

    // Set up any event listeners or additional configurations if needed
    // For example:
    // newSocket.onopen = () => console.log('WebSocket connection opened');

    setSocket(newSocket);

    // Clean up the WebSocket connection on component unmount
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Custom hook to access the WebSocket instance
export const useWebSocket = () => {
  const socket = useContext(WebSocketContext);
  if (!socket) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return socket;
};
