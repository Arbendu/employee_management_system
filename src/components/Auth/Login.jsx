/* eslint-disable react/prop-types */
//import React from 'react'

import { useState } from "react"

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        // After submitting the form the input fild set to empty
        setEmail("")
        setPassword("")
    }

  return (
    <div className="flex items-center justify-center h-screen w-screen">
        <div className="border-2 rounded-xl border-emerald-600 p-12">
            <form
             onSubmit={(e) => {
                submitHandler(e)
             }}
             className="flex flex-col items-center justify-center">
                <input
                 value={email}
                 onChange={(e)=> {
                    setEmail(e.target.value)
                 }} 
                 required 
                 className="text-white border-2 border-emerald-600 outline-none bg-transparent rounded-full px-5 py-1 text-xl" type="email" placeholder="Enter Your email"/>
                <input
                 value={password}
                 onChange={(e)=> {
                    setPassword(e.target.value)
                 }}
                 required
                 className="text-white border-2 border-emerald-600 outline-none bg-transparent rounded-full px-5 py-1 mt-3 text-xl" type="password" placeholder="Enter password" />
                <button className="text-white bg-emerald-600 mt-10 outline-none rounded-full px-5 py-1 text-xl w-full">Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
