import React, { useState } from "react";

const Form = ({ name, email, password, confirmPassword }) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleNameChange = (event) => {
    const value = event.target.value;
    setNewName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setNewEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setNewPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmNewPassword(value);
  };

  const handleSubmit = (event) => {
    if (confirmNewPassword !== newPassword) {
      event.preventDefault();
      alert("Vos 2 mots de passe ne sont pas identiques");
    } else {
      event.preventDefault();
      setIsRegistered(true);
    }
  };

  return (
    <div>
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
        <span className="inputTitle">Password</span>
        <input
          placeholder="JoHnDoE2020"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className="inputTitle">Confirm password</span>
        <input
          placeholder="JoHnDoE2020"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <input className="inputButton" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Form;
