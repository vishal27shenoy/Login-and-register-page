import React from "react";
import "./App.css";
const Error = ({ val, seterror }) => {
  return (
    <>
      {console.log(val + "Error")}
      <div
        className={
          val == "Login Sucessfull" ? "noterror_container" : "error_container"
        }
      >
        <div className="textval">{val}</div>
        <div className="cross" onClick={() => seterror(null)}>
          x
        </div>
      </div>
    </>
  );
};

export default Error;
