const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Schema = require("./schema");
const bcrypt = require("bcryptjs");
app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://0.0.0.0:27017/RegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Sucessfull of DB"))
  .catch((err) => console.log(err));

app.post("/Register", async (req, res) => {
  const { firstname, lastname, email, gender, password, confirmpassword } =
    req.body;
  Schema.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "UnSucessfull" });
    } else {
      const SchemaValue = new Schema({
        firstname: firstname,
        lastname: lastname,
        email: email,
        gender: gender,
        password: password,
        confirmpassword: confirmpassword,
      });
      SchemaValue.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Sucessfull" });
        }
      });
    }
  });
});

app.post("/Loginpage", async (req, res) => {
  const { email, password } = req.body;
  const user = await Schema.findOne({ email: email });
  console.log(user);
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    res.send({ message: "Sucessfull" });
  } else {
    res.send({ message: "UnSucessfull" });
  }
});

const server = app.listen(3001, () => {
  console.log("Connection Sucessfull");
});
