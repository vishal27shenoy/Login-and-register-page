import React, { useState } from "react";
import axios from "axios";
import Error from "./Error";
const Regitser = () => {
  const [resobj, setresobj] = useState({});
  const [alert, setalert] = useState(-1);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    password: "",
    confirmpassword: "",
  });
  const setvalue = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const submitvalue = () => {
    const { firstname, lastname, email, gender, password, confirmpassword } =
      data;
    if (
      firstname &&
      lastname &&
      email &&
      gender &&
      password &&
      confirmpassword
    ) {
      if (password === confirmpassword) {
        axios.post("http://localhost:3001/Register", data).then((res) => {
          console.log(res.data.message);
          if (res.data.message == "Sucessfull") setalert(0);
          else if (res.data.message == "UnSucessfull") setalert(1);
        });
      } else {
        console.log("Enter password correctly");
      }
    } else {
      console.log("Enter data data");
    }
  };
  return (
    <>
      {/* <Error /> */}
      <div className="container">
        <div className="firstname">
          <input
            type="text"
            name="firstname"
            placeholder="Firstname"
            onChange={setvalue}
            required
          />
        </div>
        <div className="lastname">
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            onChange={setvalue}
            required
          />
        </div>
        <div className="email">
          <input
            type="text"
            name="email"
            placeholder="xxx@email.com"
            onChange={setvalue}
            required
          />
        </div>
        <div className="gender">
          Male
          <input
            type="radio"
            name="gender"
            id=""
            value="male"
            onChange={setvalue}
            required
          />
          Female
          <input
            type="radio"
            name="gender"
            id=""
            value="female"
            onChange={setvalue}
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
            required
          />
        </div>
        <div className="confirmpassword">
          <input
            type="password"
            name="confirmpassword"
            id=""
            onChange={setvalue}
            placeholder="must be 8 character long"
            required
          />
        </div>
        <div className="Register">
          <input type="submit" value="Register" onClick={submitvalue} />
        </div>
      </div>
    </>
  );
};

export default Regitser;
