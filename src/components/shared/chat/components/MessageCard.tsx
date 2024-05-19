import React from "react";
import { Avatar, Card, Typography } from '@mui/material';

interface MessageCardProps {
  type: 'incoming' | 'outgoing';
  message: string;
  username: string;
}

const MessageCard: React.FC<MessageCardProps> = ({ type, message, username }) => {
  const cardStyle: React.CSSProperties = {
    display: 'inline-block', 
    maxWidth: '70%', 
    padding: '10px 14px',
    marginBottom: '10px',
    wordWrap: 'break-word',
    backgroundColor: type === 'incoming' ? '#ffffff' : '#dcf8c6',
    alignSelf: type === 'incoming' ? 'flex-start' : 'flex-end',
    borderRadius: '10px',
    boxShadow: '0 1px 1.5px rgba(0,0,0,0.15)',
    position: 'relative',
  };

  const avatarStyle: React.CSSProperties = {
    width: '40px', 
    height: '40px', 
    fontSize: '18px', 
    backgroundColor: type === 'incoming' ? '#f0f0f0' : '#aed581',
    marginRight: type === 'incoming' ? '10px' : '0',
    marginLeft: type === 'incoming' ? '0' : '10px',
    marginBottom:'7px',
    flexShrink: 0, 
  };

  const textStyle: React.CSSProperties = {
    padding: '4px 0',
  };

  return (
    <div style={{ display: 'flex', flexDirection: type === 'incoming' ? 'row' : 'row-reverse', alignItems: 'center' }}>
      <Avatar style={avatarStyle}>
        {username.charAt(0).toUpperCase()}
      </Avatar>
      <Card style={cardStyle}>
        <Typography variant="body1" style={textStyle}>{message}</Typography>
      </Card>
    </div>
  );
};

export default MessageCard;
