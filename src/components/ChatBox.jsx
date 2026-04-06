import { useState, useEffect, useRef } from "react";
import { socket, getChatHistory } from "../services/chat";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const scrollRef = useRef();

  useEffect(() => {
    if (user) {
      socket.connect();
      socket.emit("join", user._id);
      getChatHistory().then(({ data }) => setHistory(data));
      socket.on("message", (msg) => setHistory((prev) => [...prev, msg]));
    }
    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const send = () => {
    if (!message) return;
    const msgData = { sender: user._id, receiver: "admin_id_here", message }; // In real app, Admin ID is dynamic
    socket.emit("sendMessage", msgData);
    setHistory([...history, msgData]);
    setMessage("");
  };

  if (!user) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 h-96 shadow-2xl rounded-2xl flex flex-col border border-gray-200">
          <div className="bg-blue-600 p-4 text-white rounded-t-2xl flex justify-between">
            <span className="font-bold">Live Support</span>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
            {history.map((h, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${h.sender === user._id ? "bg-blue-600 text-white self-end ml-auto" : "bg-gray-100 text-gray-800"}`}
              >
                {h.message}
              </div>
            ))}
            <div ref={scrollRef} />
          </div>
          <div className="p-3 border-t flex">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-sm border-none focus:ring-0"
              placeholder="Type a message..."
            />
            <button onClick={send} className="text-blue-600 font-bold">
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          💬 Support
        </button>
      )}
    </div>
  );
};
export default ChatBox;
