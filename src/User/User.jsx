import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const {username} = useParams();
  return <div className='bg-gray-500 text-pretty p-5 text-center text-2xl text-white font-bold'> Username : {username}</div>;
};

export default User;
