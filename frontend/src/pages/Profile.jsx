import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
// Firebase auth code will go here


const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  if(!user){
      return navigate("/login")
  }

  return (
    <div className="container">
      <h1 className="text-2xl text-center mb-8">Profile</h1>
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default Profile;
