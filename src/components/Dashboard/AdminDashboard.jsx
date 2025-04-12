/* eslint-disable react/prop-types */
//import React from 'react'

import AllTask from "../other/AllTask"
import CreateTask from "../other/CreateTask"
import EmpHeader from "../other/EmpHeader"


const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
        <EmpHeader changeUser={props.changeUser}/>
        <CreateTask data={props.data}/>
        <AllTask data={props.data}/>
    </div>
  )
}

export default AdminDashboard
