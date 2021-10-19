// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';

// const Login = () => {
//     const { signInUsingGoogle } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleRegistration = e => {
//         e.preventDefault();
//     }
//     const handleEmailChange = e => {
//         setEmail(e.target.value);
//     }
//     const handlePassWordChange = e => {
//         setPassword(e.target.value);
//     }
//     return (
//         <div className="my-5">
//             <form onSubmit={handleRegistration}>
//                 <h1>please log in  </h1>
//                 <input onBlur={handleEmailChange} type="email" name="" id="email" required placeholder="Enter your email" /><br /><br />
//                 <input onBlur={handlePassWordChange} type="password" required name="" id="password" placeholder="Enter your password" /><br /><br />
//                 <input type="submit" value="submit" /><br />
//                 <p>Dont have Account?<Link to="/register">register</Link></p>
//                 <p>or</p>
//                 <button onClick={signInUsingGoogle} className="btn btn-warning ">Google sign in</button>
//             </form>
//         </div>

//     );
// };

// export default Login;