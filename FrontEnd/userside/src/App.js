import logo from "./logo.svg";
import "./App.css";
import Regitser from "./Regitser";
import { Router, Routes, Route } from "react-router-dom";
import Loginpage from "./Loginpage";
import { Link } from "react-router-dom";
import { useState } from "react";
import Error from "./Error";
function App() {
  const [error, seterror] = useState(null);
  const [noterror, notseterror] = useState(false);
  const [errmsg, seterrmsg] = useState("");
  const [change, setchange] = useState(true);
  return (
    <>
      {console.log(typeof null)}
      {error !== null ? (
        error ? (
          <Error val={errmsg} seterror={seterror} />
        ) : (
          <Error val={errmsg} seterror={seterror} />
        )
      ) : (
        ""
      )}
      <div className="form_container">
        <div className="register_and_login">
          <div className="login">
            <button
              onClick={() => setchange(true)}
              style={{
                boxShadow: change
                  ? "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px"
                  : "",
              }}
            >
              Login
            </button>
          </div>
          <div className="register">
            <button
              onClick={() => setchange(false)}
              style={{
                boxShadow: change
                  ? ""
                  : "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
              }}
            >
              Register
            </button>
          </div>
        </div>
        {change ? (
          <Loginpage seterror={seterror} seterrmsg={seterrmsg} />
        ) : (
          <Regitser />
        )}
        <div className="text">
          {change ? (
            <span onClick={() => setchange(false)}>
              New Here <span className="blue"> Register?</span>
            </span>
          ) : (
            <span onClick={() => setchange(true)}>
              Already a User <span className="blue"> Login?</span>
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
