import React from 'react'
import './styles.css'

const Login = (props) => {
    const {email,setemail,password,setpassword,handleLogin,handleSignup,hasaccount,sethasaccount,emailerror,setemailerror,passworderror,setpassworderror} = props;
  return (<>
    <section className="login">
        <div className="loginContainer">
            <label>E-mail</label>
            <input type="text" 
            className='credinput'
            required 
            autoFocus 
            value = {email} 
            onChange = {e => setemail(e.target.value)} />
            <p className='errorMsg'>{emailerror}</p>
            <label>Password</label>
            <input type="text"
            className='credinput' 
            required
            value = {password}
            onChange = {e => setpassword(e.target.value)} />
            <p className='errorMsg'>{passworderror}</p>
            <div className="btnContainer">
              {hasaccount ? (
                <>
                <button onClick={handleLogin}>Sign In</button>
                <p>Don't have an account ? <span onClick={() => {sethasaccount(!hasaccount)}}>Sign Up</span></p>
                </>
              ) : (
                <>
                <button onClick={handleSignup}>Sign Up</button>
                <p>Already have an account ? <span onClick={() => {sethasaccount(!hasaccount)}}>Sign In</span></p>
                </>
              )}
            </div>
        </div>
    </section>
    </>
  )
}

export default Login