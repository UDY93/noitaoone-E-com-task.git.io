import React from 'react'
import './CSS/LoginSigUp.css'

export const LoginSigUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsinupcontainer">
        <h1>Sign Up</h1>
        <br />
        <div className="login-sing-fileds">
          <input type="text" placeholder='Your Name' />
          
          <input type="email" name="" id=""  placeholder='Enter Your Email'/>
          
          <input type="password" name="" id="" placeholder='Enter Your Password' />
        </div>
        <br />
        <button>Continue</button>
        <p className="loginsignup-login">
          Alrady have an Account ? <span>login here</span>
        </p>
        <div className="loginsingup-aggi">
          <input type="checkbox" name="" id="" />
          <p>Agree</p>
        </div>
      </div>
    </div>
  )
}
