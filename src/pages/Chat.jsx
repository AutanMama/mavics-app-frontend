import ChatBox from '../components/ChatBox';

const Chat = () => (
  <div className="h-[60vh] flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Technical Support Chat</h2>
      <p className="text-gray-600 mb-8">Click the bubble at the bottom right to start a conversation with our engineers.</p>
      <ChatBox />
    </div>
  </div>
);
export default Chat;