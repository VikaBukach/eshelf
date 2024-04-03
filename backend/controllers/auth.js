const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const User = require("../models/User");

const SECRET_KEY = "secret";

const authorize = async (req, res) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    jwt.verify(token, SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }
      const { id } = decoded;
      const user = await User.findOne({
        userId: id,
      });
      res.send({
        name: user.name,
        surname: user.surname,
        email: user.email,
      });
    });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(200, {
      message: "Something went wrong!",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (!user) {
      return res.status(200).send({ type: "error", message: "User not found" });
    }
    const comparePasswords = await bcrypt.compare(password, user.password);
    if (!comparePasswords) {
      return res.status(200).send({ type: "error", message: "Wrong username or password!" });
    }
    const token = jwt.sign({ id: user.userId }, SECRET_KEY);
    res.send({
      type: "success",
      message: "You are succefull logged in!",
      token,
      name: user.name,
      surname: user.surname,
      email: user.email,
    });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(200, {
      type: "error",
      message: "Something went wrong!",
    });
  }
};

const register = async (req, res) => {
  const { name, surname, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.findOne({
      email: email.toLowerCase(),
    });
    if (user) {
      return res.status(200).send({ type: "error", message: "User already exist" });
    }
    const userId = uuidv4();
    await User.create({
      userId,
      name,
      surname,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: userId }, SECRET_KEY);
    res.status(200).send({ type: "success", name, surname, email, token });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500, {
      type: "error",
      message: "Something went wrong!",
    });
  }
};

module.exports = {
  login,
  register,
  authorize,
};
