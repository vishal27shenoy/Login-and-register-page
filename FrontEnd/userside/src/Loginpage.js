import axios from "axios";
import React, { useState } from "react";
import "./App.css";
const Loginpage = ({ seterror, seterrmsg }) => {
  const [data, setdata] = useState({ email: "", password: "" });
  const setvalue = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };
  const sendval = () => {
    const { email, password } = data;
    axios.post("http://localhost:3001/Loginpage", data).then((res) => {
      console.log(res.data.message);
      if (res.data.message == "UnSucessfull") {
        seterror(true);
        seterrmsg("Invalid Login Details");
      } else if (res.data.message == "Sucessfull") {
        seterrmsg("Login Sucessfull");
        seterror(false);
      }
    });
  };
  return (
    <>
      <div className="login_container">
        <div className="email">
          <input
            type="email"
            name="email"
            id=""
            onChange={setvalue}
            placeholder="xxx@email.com"
            required
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            id=""
            onChange={setvalue}
            placeholder="must be 8 character long"
          />
        </div>
        <div className="submit">
          <button onClick={sendval}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
