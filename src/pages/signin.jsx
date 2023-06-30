// import React, { useState } from "react";
// import "../styles/LoginForm.css";
// import Card from "../../components/Card/Card";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// // import { database } from "../../utils/database";

// const SignIn = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessages, setErrorMessages] = useState({});

//   const errors = {
//     username: "Invalid username",
//     password: "Invalid password",
//     noUsername: "Please enter your username",
//     noPassword: "Please enter your password",
//   };

// //   const handleSubmit = (e) => {
// //     // Prevent page from reloading
// //     e.preventDefault();

// //     if (!username) {
// //       // Username input is empty
// //       setErrorMessages({ name: "noUsername", message: errors.noUsername });
// //       return;
// //     }

// //     if (!password) {
// //       // Password input is empty
// //       setErrorMessages({ name: "noPassword", message: errors.noPassword });
// //       return;
// //     }

// //     // Search for user credentials
// //     const currentUser = database.find((user) => user.username === username);

// //     if (currentUser) {
// //       if (currentUser.password !== password) {
// //         // Wrong password
// //         setErrorMessages({ name: "password", message: errors.password });
// //       } else {
// //         // Correct password, log in user
// //         setErrorMessages({});
// //         setIsLoggedIn(true);
// //       }
// //     } else {
// //       // Username doens't exist in the database
// //       setErrorMessages({ name: "username", message: errors.username });
// //     }
// //   };

//   // Render error messages
//   const renderErrorMsg = (name) =>
//     name === errorMessages.name && (
//       <p className="error_msg">{errorMessages.message}</p>
//     );

//   return (
//     <Card>
//     <h1 className="title">Sign In</h1>
//       <p className="subtitle">
//         Please log in using your username and password!
//       </p>
//       <form //</Card>onSubmit={handleSubmit}
//       >
//         <div className="inputs_container">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           {renderErrorMsg("username")}
//           {renderErrorMsg("noUsername")}
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {renderErrorMsg("password")}
//           {renderErrorMsg("noPassword")}
//         </div>
//         <input type="submit" value="Log In" className="login_button" />
//       </form>
//       <div className="link_container">
//         <a href="" className="small">
//           Forgot Password?
//         </a>
//       </div>
//       <div className="icons">
//         <GoogleIcon className="icon" />
//         <FacebookIcon className="icon" />
//         <TwitterIcon className="icon" />
//       </div>
//    </Card>
//   );
// };

// export default SignIn;

import React from "react";
import 
const SignIn = () => {
    return (    
        <section>
            <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <label htmlFor="">Password</label>
                    </div>
                    <div className="forget">
                        <label htmlFor=""> Remember Me  <a href="#">Forget Password</a></label>
                      
                    </div>
                    <button>Log in</button>
                    <div className="register">
                        <p>Don't have a account <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
        </section>
    )
}
export default SignIn