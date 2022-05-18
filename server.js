const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const pool = require("./config/db/pool");
const passport = require("passport");
const initializePassport = require("./config/passport");
const cookieParser = require("cookie-parser");

// routes fetching

const users = require("./routes/user");

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

// middleware
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(
  cors({
    methods: ["GET", "POST"],
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      pool: pool,
    }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day
  })
);

initializePassport(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.user);
  next();
});

// user routes
app.post("/login", checkAuthenticated, users.loginUser);
app.post("/signup", users.createUser);
app.get("/logout", checkAuthenticated, users.logoutUser);
app.get("/user", users.getUser);
app.get("/all-users", users.getAllUsers);

// login middleware check.

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("user is authenticated");
    // will be returned if true that a user is logged
    next();
  } else {
    console.log("user is not authenticated");
    next();
  }
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/src/page/landing.jsx"));
});

app.listen(PORT, () => {
  console.log(`APP LISTENING ON PORT ${PORT}`);
});
