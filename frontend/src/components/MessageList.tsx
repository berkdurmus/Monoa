
import React from 'react';
import { useMessages } from '../state/chatStore';

const MessageList: React.FC = () => {
  const messages = useMessages();

  return (
    <div>
      {messages.map((msg, index) => (
        <p key={index}>{msg.content}</p>
      ))}
    </div>
  );
}

export default MessageList;
    