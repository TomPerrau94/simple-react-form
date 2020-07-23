// import React, { useState } from "react";
// import "./App.css";
// // import Form from "./components/Form";
// import Results from "./components/Results";
// import Footer from "./components/Footer";

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isRegistered, setIsRegistered] = useState(false);

//   const handleNameChange = (event) => {
//     const value = event.target.value;
//     setName(value);
//   };

//   const handleEmailChange = (event) => {
//     const value = event.target.value;
//     setEmail(value);
//   };

//   const handlePasswordChange = (event) => {
//     const value = event.target.value;
//     setPassword(value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     const value = event.target.value;
//     setConfirmPassword(value);
//   };

//   const handleSubmit = (event) => {
//     if (confirmPassword !== password) {
//       event.preventDefault();
//       alert("Vos 2 mots de passe ne sont pas identiques");
//     } else {
//       event.preventDefault();
//       setIsRegistered(true);
//     }
//   };

//   return (
//     <div>
//       <div className="container">
//         {isRegistered ? (
//           <Results name={name} email={email} password={password} />
//         ) : (
//           <div>
//             <h1 className="formTitle">Create Account</h1>
//             <form className="form" onSubmit={handleSubmit}>
//               <span className="inputTitle">Name</span>
//               <input
//                 placeholder="John Doe"
//                 type="text"
//                 name="name"
//                 value={name}
//                 onChange={handleNameChange}
//               />
//               <span className="inputTitle">Email</span>
//               <input
//                 placeholder="john.doe@mail.com"
//                 type="email"
//                 name="email"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//               <span className="inputTitle">Password</span>
//               <input
//                 placeholder="JoHnDoE2020"
//                 type="password"
//                 name="password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//               <span className="inputTitle">Confirm password</span>
//               <input
//                 placeholder="JoHnDoE2020"
//                 type="password"
//                 name="confirmPassword"
//                 value={confirmPassword}
//                 onChange={handleConfirmPasswordChange}
//               />
//               <input className="inputButton" type="submit" value="Register" />
//             </form>
//           </div>
//         )}
//       </div>
//       <Footer
//         className="footer"
//         technoLink="https://fr.reactjs.org/"
//         technoName="React"
//         companyLink="https://www.lereacteur.io"
//         companyName="le Reacteur"
//         authorLink="https://github.com/TomPerrau94"
//         authorName="Tom Perrau"
//       />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";
import Footer from "./components/Footer";

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div>
      <div className="container">
        {isRegistered ? (
          <Results
            isRegistered={isRegistered}
            setIsRegistered={setIsRegistered}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        ) : (
          <Form
            isRegistered={isRegistered}
            setIsRegistered={setIsRegistered}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}
      </div>
      <Footer
        className="footer"
        technoLink="https://fr.reactjs.org/"
        technoName="React"
        companyLink="https://www.lereacteur.io"
        companyName="le Reacteur"
        authorLink="https://github.com/TomPerrau94"
        authorName="Tom Perrau"
      />
    </div>
  );
};

export default App;
