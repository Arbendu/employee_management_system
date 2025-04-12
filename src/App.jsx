/* eslint-disable no-unused-vars */
//import React from 'react'
import { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login'
//import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);

  //console.log(authData)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, []);

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee = userData.find((e) =>email == e.email && e.password == password)
      //const admin = userData.admin.find((e) =>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}))
      }
      // else if(admin){
      //   setUser('admin')
      //   setLoggedInUserData(admin)
      //   localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', data:admin}))
      // }
    }
    else{
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/>: ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null)}
    </>
  )
}

export default App
