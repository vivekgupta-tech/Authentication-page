
import React, { useState } from 'react'
function Authentication() {
    const[isLogin,setIslogin]= useState(true);
  return (
    <div className="container">
        <div className="form-container">
            <div className="form-toggle">
                <button className={isLogin ? 'active':""} onClick={() => setIslogin(true) }>Login</button>
                <button className={ !isLogin ? 'active':""} onClick={() => setIslogin (false)}>SignUp</button>
            </div>
            { isLogin ? <>
                <div className="form">
                <h2>Login Form</h2>
                <input type="Email" placeholder='Email' />
    
                <input type="Password" placeholder='Password' />
                <a href="#">Forgot Password ?</a>
                <button>Login</button>
                <p>Not a Member? <a href="#" onClick={() => setIslogin(false)}>SignUp now</a></p>
            </div>
            </>:<>
                <div className="form">
                    <h2>Signup Form</h2>
                    <input type="Email" placeholder='Email or Phone' />
                <input type="Password" placeholder='Password' />
                <input type="Password" placeholder=' Confirm Password' />
                <button>SignUp</button>
                </div>


                </>}
        </div>
    </div>
  )
}

export default Authentication