import React from 'react'
import Logo from '../assets/logos/mutechatlogo.svg'
import './styles.css'
import Register1 from './Register1'

const Register = () => {
    
    return (
        <main className='registermain'>
            <div className="logocontainer">
                <div className="logo"><img src={Logo} alt="logo" /></div>
                <div className="logoname"><h3 className='logo1'>MuteChat</h3></div>
            </div>
            <section className="registerbox">
                <Register1/>
                </section>
            
        </main>
    )
}

export default Register