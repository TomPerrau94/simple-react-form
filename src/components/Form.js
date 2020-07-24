import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Check from "./Check";

// function viewPassword() {
//   const input = document.getElementsByClassName("passwordInput");
//   if (input.type === "password") {
//     input.type === "text";
//   } else {
//     input.type === "password";
//   }
// }

const Form = ({
  //   isRegistered,
  setIsRegistered,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const [input1Type, setInput1Type] = useState("password");
  const [input2Type, setInput2Type] = useState("password");
  const [check, setCheck] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmPassword !== password) {
      console.log(document.getElementById("passwordInput"));
      document.getElementById("passwordInput").style.borderColor = "red";
      document.getElementById("confirmPasswordInput").style.borderColor = "red";
      setCheck(false);
    } else {
      setIsRegistered(true);
    }
  };

  return (
    <div>
      <h1 className="formTitle">Create Account</h1>
      <form className="form" onSubmit={handleSubmit}>
        <span className="inputTitle">Name</span>
        <input
          placeholder="John Doe"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <span className="inputTitle">Email</span>
        <input
          placeholder="john.doe@mail.com"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="passwordElement">
          <span className="inputTitle">Password</span>

          <input
            id="passwordInput"
            placeholder="JoHnDoE2020"
            type={input1Type}
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <span
            className="viewPassword"
            onClick={() => {
              if (input1Type === "password") {
                setInput1Type("text");
              } else {
                setInput1Type("password");
              }
            }}
          >
            {input1Type === "password" ? (
              <FontAwesomeIcon icon="eye" />
            ) : (
              <FontAwesomeIcon icon="eye-slash" />
            )}
          </span>
        </div>
        <div className="passwordElement">
          <span className="inputTitle">Confirm password</span>

          <input
            id="confirmPasswordInput"
            placeholder="JoHnDoE2020"
            type={input2Type}
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <span
            className="viewPassword"
            onClick={() => {
              if (input2Type === "password") {
                setInput2Type("text");
              } else {
                setInput2Type("password");
              }
            }}
          >
            {input2Type === "password" ? (
              <FontAwesomeIcon icon="eye" />
            ) : (
              <FontAwesomeIcon icon="eye-slash" />
            )}
          </span>
          <span>
            {check ? null : <Check check={check} setCheck={setCheck} />}
          </span>
        </div>
        <input className="inputButton" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Form;
