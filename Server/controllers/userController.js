const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const feedbackModel = require("../models/feedbackModel");
const userModel = require("../models/userModel");

const userSignUp = async (req, res) => {
  try {
    const { name, city, address, email, password, pincode } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({
      name,
      city,
      address,
      email,
      password: hashedPassword,
      pincode,
    });
    res.status(200).send({ msg: "User Successfully Registered!" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Registration failed");
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid Credentials" });


    const accessToken = jwt.sign(
      { _id: user._id },
      process.env.TOKEN_SECRET,
      { expiresIn: "7d" }
    );


    res.json({
      accessToken,
      username: user.name,
      email: user.email
    });

  } catch (e) {
    console.error(e);
    res.status(500).send("Login error");
  }
};

const userAuth = async (req, res) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ message: "No token, access denied" });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await UserModel.findById(verified._id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.json(user);
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ message: "Token verification failed" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.query.userid).select("-password");
    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user");
  }
};

const feedback = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await feedbackModel.create({
      name,
      email,
      message,
    });
    res.status(200).send("Feedback sent successfully");
  } catch (err) {
    res.status(500).send("Error saving feedback: " + err.message);
  }
};

const allUsers = async (req, res) => {
  try {
    const response = await userModel.find().select("-password");
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching users");
  }
};

module.exports = {
  userSignUp,
  userLogin,
  userAuth,
  getUser,
  feedback,
  allUsers
};
