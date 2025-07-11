const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWTSECRETE || "default_secret_key";

// ➤ Register User
const userRegistration = async (req, res) => {
  try {
    const { name, city, address, email, password, pincode } = req.body;


    if (!name || !city || !address || !email || !password || !pincode) {
      return res.status(400).json({ msg: "Please fill all required fields." });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(10);      //salting 
    const hashedPassword = await bcrypt.hash(password, salt);   //hashing

    const user = await UserModel.create({
      name,
      city,
      address,
      email,
      password: hashedPassword,
      pincode,
    });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(201).json({
      msg: "User Registered Successfully!",
      token,
      userId: user._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Registration failed. Server error." });
  }
};

// ➤ Login User
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Email not found!" });

    // Validate password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ msg: "Invalid password!" });

    // Generate JWT
    const token = jwt.sign(
      { id: user._id },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({ token, msg: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Login failed. Server error." });
  }
};

// ➤ Authenticate User
const userAuthentication = async (req, res) => {
  try {
    const token = req.header("auth-token");
    if (!token) return res.status(401).json({ msg: "Access denied. No token provided." });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await UserModel.findById(decoded.id).select("-password");

    if (!user) return res.status(404).json({ msg: "User not found." });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(401).json({ msg: "Invalid or expired token." });
  }
};


module.exports = {
  userRegistration,
  userLogin,
  userAuthentication,
};

