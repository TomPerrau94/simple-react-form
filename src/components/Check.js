import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Check = ({ check, setCheck }) => {
  return (
    <span className="checkSpan">
      <FontAwesomeIcon icon="exclamation-circle" className="warningIcon" />
      Passwords don't match
    </span>
  );
};

export default Check;
