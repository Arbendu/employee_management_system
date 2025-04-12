/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//import React from 'react'

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = (props) => {
  const [userData, setUserData] = useContext(AuthContext);
  return (
    <div
      className="bg-[#1c1c1c] p-5 rounded mt-5 h-48"
    >
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div id="alltask" className="h-[80%] overflow-auto">
        {userData.map((e, id) => {
          return (
            <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded" key={id}>
              <h2 className="w-1/5">{e.firstName}</h2>
              <h3 className="w-1/5 text-blue-600">{e.firstName == userData.firstName ? props.data.taskNumbers.newTask : e.taskNumbers.newTask}</h3>
              <h5 className="w-1/5 text-yellow-500">{e.taskNumbers.active}</h5>
              <h5 className="w-1/5 text-green-600">{e.taskNumbers.completed}</h5>
              <h5 className="w-1/5 text-red-600">{e.taskNumbers.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
