import React from "react";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (confirmPassword !== password) {
      alert("Vos 2 mots de passe ne sont pas identiques");
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
