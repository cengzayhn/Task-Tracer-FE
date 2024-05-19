import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import './styles.css';
import MessageCard from './components/MessageCard';
import {
  connect,
  disconnect,
  sendValue,
  sendPrivateValue,
  subscribeToTopics,
  userJoin,
} from '../../../service/chatService';

interface ChatMessage {
  senderName: string;
  message: string;
  status: string;
  receiverName?: string;
}

interface TaskTracerChatComponentProps {
  userData: {
    username: string;
    connected: boolean;
    password: string;
    message: string;
  };
  setUserData: Function;
}

const TaskTracerChatComponent: React.FC<TaskTracerChatComponentProps> = ({ userData, setUserData }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [privateChats, setPrivateChats] = useState<Map<string, ChatMessage[]>>(new Map());
  
  const [tab, setTab] = useState<string>("CHATROOM");

  useEffect(() => {
    if (userData.username && userData.password && !userData.connected) {
      connect(userData, setUserData, subscribeToTopics, userJoin, privateChats, setPrivateChats, setMessages);
      setUserData((prevData: any) => ({ ...prevData, connected: true }));
      return () => disconnect();
    }
  }, [userData.username, userData.password]);

  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserData((prevData: any) => ({ ...prevData, message: value }));
  };

  return (
    <React.Fragment>
      {userData.connected && (
        <div className="chat-box">
          <Grid container>
            <div className='chat-header'>
              <span className='chat-username'>{userData.username}</span>
            </div>
          </Grid>
          <Grid container className='chat-container'>
            <Grid item xs={12}>
              <div className='chat-messages'>
              {tab === "CHATROOM" ? (
                  messages.map((chat, index) => (
                    <div key={index} className='message'>
                      <MessageCard
                        type={chat.senderName === userData.username ? 'outgoing' : 'incoming'}
                        message={chat.message}
                        username={chat.senderName}
                      />
                    </div>
                  ))
                ) : (
                  privateChats.get(tab)?.map((chat, index) => (
                    <div key={index} className='message'>
                      <MessageCard
                        type={chat.senderName === userData.username ? 'outgoing' : 'incoming'}
                        message={chat.message}
                        username={chat.senderName}
                      />
                    </div>
                  ))
                )}
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={10}>
              <TextField
                variant='outlined'
                autoFocus
                size='medium'
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim() !== '') {
                    e.preventDefault();
                    if (tab === "CHATROOM") {
                      sendValue(userData.username, userData.message, setUserData);
                    } else {
                      sendPrivateValue(userData.username, tab, userData.message, setUserData, privateChats, setPrivateChats);
                    }
                    setUserData((prevData: any) => ({ ...prevData, message: '' })); 
                  }
                }}
                placeholder='Type a message ...'
                className='chat-textfield'
                value={userData.message}
                onChange={handleMessage}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </React.Fragment>
  );
};

export default TaskTracerChatComponent;
