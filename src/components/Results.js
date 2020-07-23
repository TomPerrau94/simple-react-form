import React, { useState } from "react";
import Form from "./Form";

const Results = ({ name, email, password }) => {
  const [infoEditing, setInfoEditing] = useState(true);
  return (
    <div>
      {infoEditing ? (
        <div>
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
                setInfoEditing(false);
              }}
            >
              Edit information
            </button>
          </div>
        </div>
      ) : (
        <Form
          name={name}
          email={email}
          password={password}
          confirmPassword={password}
        />
      )}
    </div>
  );
};

export default Results;
