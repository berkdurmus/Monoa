
import React from 'react';
import ChatBox from './ChatBox';
import MessageList from './MessageList';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">React Chat App</h1>
      <MessageList />
      <ChatBox />
    </div>
  );
}
export default App;
    
