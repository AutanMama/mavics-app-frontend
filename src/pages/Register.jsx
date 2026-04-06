import { useState } from "react";
import { registerUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleReg = async (e) => {
    e.preventDefault();
    await registerUser(data);
    navigate("/");
  };

  return (
    <div className="flex h-[80vh] items-center justify-center px-8">
      <form
        onSubmit={handleReg}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100"
      >
        <h2 className="text-3xl font-black text-blue-900 mb-8">Join MAVICS</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 bg-gray-50 border-none rounded-xl mb-4"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 bg-gray-50 border-none rounded-xl mb-4"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 bg-gray-50 border-none rounded-xl mb-6"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
          Register Account
        </button>
      </form>
    </div>
  );
};
export default Register;
