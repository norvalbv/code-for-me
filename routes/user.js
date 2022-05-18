const passport = require("passport");
const pool = require("../config/db/pool");
const bcrypt = require("bcrypt");

const loginUser = (req, res, next) => {
  const auth = passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) {
      res.send({ success: false, message: "Password or username incorrect" });
    } else {
      req.login(user, (err) => {
        if (err) throw err;
        res.send({ success: true, message: "Successfully logged in." });
      });
    }
  });
  auth(req, res, next);
};

const createUser = async (req, res) => {
  try {
    const { password, confirmPassword, email, username, firstName, lastName } =
      req.body;
    if (
      !username ||
      !password ||
      !confirmPassword ||
      !email ||
      !firstName ||
      !lastName
    ) {
      return res.status(409).send("Please enter all valid fields.");
    }

    if (password !== confirmPassword) {
      return res.status(409).send("Passwords do not match.");
    }

    if (username.length > 16) {
      return res.status(409).send("Usernames must be less than 16 characters.");
    }

    if (password.length < 8) {
      return res.status(409).send("Password not secure enough.");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const usernameFetch = await pool.query(
      `SELECT * FROM users WHERE username=$1`,
      [username]
    );

    if (usernameFetch.rows.length !== 0) {
      return res.status(409).send("Username taken, please enter a new one.");
    }

    const emailFetch = await pool.query(`SELECT * FROM users WHERE email=$1`, [
      email,
    ]);

    if (emailFetch.rows.length !== 0) {
      return res.status(409).send("Email address taken.");
    }

    const newUser = await pool.query(
      `INSERT INTO users (username, email, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5)`,
      [username, email, hash, firstName, lastName]
    );

    if (newUser) {
      return res.status(201).send("User created");
    }
  } catch (err) {
    console.log(err);
    return res.status(501).send("User not created - error occured");
  }
};

const logoutUser = (req, res) => {
  console.log(req.session);
  try {
    console.log("logged out");
    req.session.destroy(function () {
      res.clearCookie("connect.sid");
      res.redirect("/");
    });
  } catch (err) {
    console.error(err);
  }
};

const getUser = (req, res) => {
  try {
    if (req.user) {
      res.send(req.user);
    } else {
      res.send(null);
      console.log("no user found");
    }
  } catch (err) {
    console.error(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await pool.query(`SELECT * FROM users`);
    res.send(data.rows);
  } catch (err) {
    console.error(err);
  }
};

const getUserById = async (req, res) => {
  const { username } = req.params;
  try {
    const data = await pool.query(
      `SELECT * FROM users WHERE username = '${username}'`
    );
    res.send(data.rows);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  loginUser,
  createUser,
  logoutUser,
  getUser,
  getAllUsers,
  getUserById,
};
