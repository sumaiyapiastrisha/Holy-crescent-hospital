import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication();
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const handleRegistration = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePassWordChange = e => {
        setPassword(e.target.value);
    }
    return (
        <div className="my-5">
            <form onSubmit={handleRegistration}>
                <h1>please register  </h1>
                <input onBlur={handleEmailChange} type="email" name="" id="email" required placeholder="Enter your email" /><br /><br />
                <input onBlur={handlePassWordChange} type="password" required name="" id="password" placeholder="Enter your password" /><br /><br />
                <input type="submit" value="submit" /><br />
                <p>or</p>
                <span>Already have an account ?</span> <Link to="/login">Log in </Link>
            </form>
        </div >

    );
};

export default Register;