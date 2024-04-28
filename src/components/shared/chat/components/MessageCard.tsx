import React from "react";
import { Card, Typography } from '@mui/material';

interface MessageCardProps {
  type: 'incoming' | 'outgoing';
  message: string;
}

const MessageCard: React.FC<MessageCardProps> = ({ type, message }) => {
  const cardStyle: React.CSSProperties = {
    maxWidth: '30%',
    padding: '8px',
    marginBottom: '8px',
    wordWrap: 'break-word',
    backgroundColor: type === 'incoming' ? '#FFFFFF' : '#DCF8C6',
    alignSelf: type === 'incoming' ? 'flex-start' : 'flex-end',
    marginLeft: type === 'incoming' ? '0' : 'auto', 
    marginRight: type === 'incoming' ? 'auto' : '0', 
  };

  const textStyle: React.CSSProperties = {
    padding: '8px',
  };

  return (
    <Card style={cardStyle}>
      <Typography variant="body1" style={textStyle}>{message}</Typography>
    </Card>
  );
};

export default MessageCard;
