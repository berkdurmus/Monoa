
import React from 'react';
import ChatBox from './ChatBox';
import MessageList from './MessageList';

const App: React.FC = () => {
  return (
    <div>
      <h1>React Chat App</h1>
      <MessageList />
      <ChatBox />
    </div>
  );
}

export default App;
    