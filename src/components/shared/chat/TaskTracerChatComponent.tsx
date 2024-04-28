import React, { useState } from 'react';
import { Grid, TextField } from '@mui/material';
import './styles.css';
import MessageCard from './components/MessageCard';

type MessageType = 'outgoing' | 'incoming'; 

const TaskTracerChatComponent: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [messageType, setMessageType] = useState<MessageType>('outgoing');

    const handleMessageSend = (message: string) => {
        setMessages([...messages, message]);
    };

    return (
        <React.Fragment>
            <Grid container>
                <div className='chat-header'>
                    <span className='chat-username'>Mehmet Cengiz Ayhan</span>
                </div>
            </Grid>
            <Grid container className='chat-container'>
                <Grid item xs={12}>
                    <div className='chat-messages'>
                        {messages.map((message, index) => (
                            <div key={index} className='message'>
                                <MessageCard type={messageType} message={message}/>
                            </div>
                        ))}
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
                                    handleMessageSend((e.target as HTMLInputElement).value);
                                    (e.target as HTMLInputElement).value = '';
                                }
                            }}
                            placeholder='Type a message ...'
                            className='chat-textfield'
                        />
                    </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default TaskTracerChatComponent;
