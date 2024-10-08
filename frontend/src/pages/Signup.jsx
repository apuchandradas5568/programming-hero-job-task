import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toast";
import { AuthContext } from "../AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const location = useLocation();

  const { createUser, user } = useContext(AuthContext);
  if(user) { 
    return navigate("/");
  }
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Implement registration logic here
    await createUser(email, password)
      .then((res) => {
        navigate(location.state?.from ? location.state.from : "/login");

        toast.success("Registration successful");
      })
      .catch(() => {
        toast.error("Registration failed");
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-container max-w-md mx-auto p-4 mt-10 ">
      <h1 className="text-3xl font-bold text-center mb-4">Register</h1>

      <form id="register-form" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block  font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="youremail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block  font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md shadow-sm"
        >
          Register
        </button>
      </form>

      <p className="text-center mt-8">
        Already have an account?{" "}
        <Link className="text-blue-600" to="/login">
          Login Here
        </Link>
      </p>
    </div>
  );
};

export default Signup;
