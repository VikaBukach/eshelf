const client = require("../../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const SECRET_KEY = "secret";

const authorize = async (req, res) => {
  const database = client.getDb();
  const users = database.collection("users");

  const token = req.headers.authorization;

  console.log("CALL", token);

  try {
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    jwt.verify(token, SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "Invalid token" });
      }

      const { id } = decoded;

      const user = await users.findOne({
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
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const database = client.getDb();
  const users = database.collection("users");
  try {
    const user = await users.findOne({
      email,
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const comparePasswords = await bcrypt.compare(password, user.password);

    if (!comparePasswords) {
      return res.status(404).send("Wrong username or password!");
    }

    const token = jwt.sign({ id: user.userId }, SECRET_KEY);

    res.send({
      name: user.name,
      surname: user.surname,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

const register = async (req, res) => {
  const { name, surname, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(email);
  if (!email || !password) {
    res.send("TEST");
  }

  const database = client.getDb();
  const users = database.collection("users");
  try {
    const user = await users.findOne({
      email,
    });

    if (user) {
      return res.status(404).send({ message: "User already exist" });
    }

    const userId = uuidv4();
    await users.insertOne({
      userId,
      name,
      surname,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: userId }, SECRET_KEY);

    res.status(200).send({ token });
  } catch (error) {
    console.error("Error saving review:", error);
    res.status(500, {
      message: "Something went wrong!",
    });
  }
};

module.exports = {
  login,
  register,
  authorize,
};
