
import React from 'react';
import { useMessages } from '../state/chatStore';

const MessageList: React.FC = () => {
  const messages = useMessages();

  return (
    <div className="bg-gray-100 p-4 rounded">
      {messages.map((msg, index) => (
        <p key={index} className="p-2 bg-white my-2 rounded shadow">{msg.content}</p>
      ))}
    </div>
  );
}

export default MessageList;
    
