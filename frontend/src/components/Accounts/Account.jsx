import React, { useState } from 'react'
import loginIcon from "./loginIcon.png"
import "./Account.css"

const Account = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
    

  return (
    <>
      <div className="account-container">
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="login">
            <div>

            <div className="icon">
              <img src={loginIcon} alt='loginIcon' id='loginIcon'></img>
            </div>
            </div>
            <div>

            <div className="head">
            <h1>Login</h1>
            </div>
            <div className="form">
                
                <input type="text" name="Email" id="Email" placeholder='Email'/>
                <input type="password" name="password" id="password" placeholder='Password' />
            </div>

            <div className="paratext">
               <p>Don't have an account <button id='paraLink' onClick={handleFlip}>Sign Up</button></p>
            </div>
            <button onClick={handleFlip} id='signUpbtn'>Sign In</button>
            </div>
        </div>
        <div className="register">
            <div>

        <div className="icon">

              <img src={loginIcon} alt='loginIcon' id='loginIcon'></img>
            </div>
            </div>
            <div>

            <div className="head">
            <h1>Register</h1>
            </div>
            <div className="form">
                
                <input type="text" name="Username" id="Username" placeholder='Username'/>
                <input type="text" name="Email" id="Email" placeholder='Email'/>
                <input type="password" name="Password" id="Password" placeholder='Password' />
                <input type="password" name="Confirm Password" id="Confirm Password" placeholder='Confirm Password' />
            </div>

            <div className="paratext">
               <p>Already have an account <button id='paraLink' onClick={handleFlip}>Sign In</button></p>
            </div>
            <button onClick={handleFlip} id='signInbtn'>Sign up</button>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Account