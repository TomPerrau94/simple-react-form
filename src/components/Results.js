import React from "react";

const Results = ({ setIsRegistered, name, email, password }) => {
  return (
    <div className="results">
      <h1>Results</h1>
      <ul className="resultInfos">
        <li>Name : {name}</li>
        <li>Email : {email}</li>
        <li>Password : {password}</li>
      </ul>
      <button
        className="inputButton"
        onClick={() => {
          setIsRegistered(false);
        }}
      >
        Edit information
      </button>
    </div>
  );
};

export default Results;
