import { useState } from "react";
import { loginUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(creds);
      navigate("/");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="flex h-[80vh] items-center justify-center px-8">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-sm border border-gray-100">
        <h2 className="text-3xl font-black text-blue-900 mb-8">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-gray-50 border-none rounded-xl"
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-gray-50 border-none rounded-xl"
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
