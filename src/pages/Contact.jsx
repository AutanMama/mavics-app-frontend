import { useState } from "react";
import { sendContact } from "../services/api";

const Contact = () => {
  const [msg, setMsg] = useState({ name: "", email: "", message: "" });

  const handleSend = async (e) => {
    e.preventDefault();
    await sendContact(msg);
    alert("Message Sent!");
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] bg-blue-50 px-8 py-10">
      <form
        onSubmit={handleSend}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-900">Get in Touch</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setMsg({ ...msg, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          onChange={(e) => setMsg({ ...msg, email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded h-32"
          onChange={(e) => setMsg({ ...msg, message: e.target.value })}
        ></textarea>
        <button className="bg-blue-600 text-white w-full py-3 rounded-lg font-bold">
          Send Message
        </button>
      </form>
    </div>
  );
};
export default Contact;
