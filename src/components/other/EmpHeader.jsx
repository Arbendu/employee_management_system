/* eslint-disable react/prop-types */
//import React from 'react'

const EmpHeader = (props) => {
    const logOutUser = () =>{
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
        //window.location.reload()
      }
    
      return (
        <div className="flex items-end justify-between">
          <h1 className="text-xl">Hello, <br /> <span className="text-2xl font-semibold">Admin</span> 🖐</h1>
          <button onClick={logOutUser} className="bg-red-700 text-white font-medium px-3 py-2 rounded-sm">Log Out</button>
        </div>
      )
}

export default EmpHeader
