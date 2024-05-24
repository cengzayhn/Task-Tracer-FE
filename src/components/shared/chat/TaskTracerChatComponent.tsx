import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

interface ChatPageProps {
  username: string;
}

interface Message {
  sender: string;
  content: string;
}

const TaskTracerChatComponent: React.FC<ChatPageProps> = ({ username }) => {
  const [messagesMap, setMessagesMap] = useState<Map<string, Message>>(new Map());
  const [message, setMessage] = useState('');
  const [stompClient, setStompClient] = useState<any>(null);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8081/ws');
    const client = Stomp.over(socket);

    client.connect({}, () => {
      console.log('Connected to WebSocket');
      client.subscribe('/topic/public', (msg: any) => {
        console.log('Received message:', msg);
        const newMessage = JSON.parse(msg.body);
        console.log('Parsed message:', newMessage);
        const messageKey = `${newMessage.sender}:${newMessage.content}`;
        setMessagesMap((prevMessages) => {
          if (!prevMessages.has(messageKey)) {
            const newMessagesMap = new Map(prevMessages);
            newMessagesMap.set(messageKey, newMessage);
            return newMessagesMap;
          }
          return prevMessages;
        });
      });

      client.send('/app/chat.addUser', {}, JSON.stringify({ sender: username, type: 'JOIN' }));
    });

    setStompClient(client);

    return () => {
      if (client && client.connected) {
        client.disconnect(() => {
          console.log('>>> DISCONNECT');
        });
      }
    };
  }, [username]);

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    if (message && stompClient && stompClient.connected) {
      const chatMessage = {
        sender: username,
        content: message,
        type: 'CHAT'
      };
      console.log("gonderilen mesaj : ", chatMessage);
      stompClient.send('/app/chat.sendMessage', {}, JSON.stringify(chatMessage));
      setMessage('');
    }
  };

  return (
    <div id="chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Spring WebSocket Chat Demo - TaskTracer</h2>
        </div>
        <div className="connecting">
          Connecting...
        </div>
        <ul id="messageArea">
          {Array.from(messagesMap.values()).map((msg, index) => (
            <li key={index}>
              <strong>{msg.sender}: </strong>{msg.content}
            </li>
          ))}
        </ul>
        <form id="messageForm" name="messageForm" onSubmit={sendMessage}>
          <div className="form-group">
            <div className="input-group clearfix">
              <input
                type="text"
                id="message"
                placeholder="Type a message..."
                autoComplete="off"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="primary">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskTracerChatComponent;
