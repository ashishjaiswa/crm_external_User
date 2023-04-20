import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div style={{display:'flex',justifyContent:"center",alignContent:"center" ,height:"100vh"}}><Link to='/home'> login</Link> </div>
  )
}

export default Login