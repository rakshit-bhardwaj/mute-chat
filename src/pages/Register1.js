import React from 'react'
import './styles.css'
import {fire} from '../fire'
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged,signOut } from "firebase/auth";
import Login from './Login'
import Videocalling2 from '../Videocalling2'
import { useState,useEffect } from 'react'

const Register1 = () => {

    const [user,setuser] = useState('');
    const [password,setpassword] = useState('');
    const [email,setemail] = useState('');
    const [emailerror,setemailerror] = useState('');
    const [passworderror,setpassworderror] = useState('');
    const [hasaccount,sethasaccount] = useState(false);

    const clearinput = () => {
        setemail('');
        setpassword('');
    }

    const clearerrors = () => {
        setemailerror('');
        setpassworderror('');
    }

    const handleLogin = () => {
        console.log('login called');
        const auth = getAuth(fire);
        clearerrors();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setuser(userCredential.user)
        })
        .catch(err => {
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setemailerror(err.message);
                    break;
                case "auth/wrong-password":
                    setpassworderror(err.message);
                    break;
            }
        })
    }

    const handleSignup = () => {
        console.log('sign up called');
        const auth = getAuth(fire);
        clearerrors();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            setuser(userCredential.user)
        })
        .catch(err => {
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setemailerror(err.message);
                    break;
                case "auth/weaK-password":
                    setpassworderror(err.message);
                    break;
            }
        })
    }

    const handleLogout = () => {
        const auth= getAuth(fire);
        // fire.auth().signOut();
       signOut(auth).then(() => {
         console.log('signoutsuccesful')
        }).catch((error) => {
        console.log('error in logging out')
        });
    }

    const authListener = () => {
        const auth = getAuth(fire);
        onAuthStateChanged(auth,(user) => {
            if(user){
                console.log(user);
                clearinput();
                setuser(user)
            }
            else {
                setuser('')
            }
        })
    }
    
    useEffect(()=>{
        authListener();
    },[])


  return (
      <>
      {user ? (
      <Videocalling2 handleLogout={handleLogout}/>
      ) : 
      ( <Login
    email = {email}
    setemail = {setemail}
    password = {password}
    setpassword = {setpassword}
    handleLogin = {handleLogin}
    handleSignup = {handleSignup}
    hasaccount = {hasaccount}
    sethasaccount = {sethasaccount}
    emailerror = {emailerror}
    setemailerror = {setemailerror}
    passworderror = {passworderror}
    setpassworderror = {setpassworderror}/>
    )}
    
    
    </>
  )
}

export default Register1