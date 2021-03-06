const express = require("express");
const morgan = require("morgan");
const app = express()
const cors = require("cors");

const path = require("path")


if (process.env.NODE_ENV !== "production") require("dotenv").config();

const cookieSession = require("cookie-session");

const passport = require("passport");
const passportSetup = require("./config/passport-setup");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());


app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.cookieKey]
}))

//passport
app.use(passport.initialize());
app.use(passport.session());

// database
const connectDB = require("./config/db")
connectDB();



app.use(morgan('dev'))

// routes
app.use("/auth", require("./routes/auth"))
app.use("/user", require("./routes/user"))
app.use("/device", require("./routes/device"))


const path_to_root_folder = path.resolve();
console.log(path_to_root_folder)
app.use("/", express.static(path.join(path_to_root_folder, "frontend", "build")))


// sending the frontend app to the browser
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res, next) => {
    res.sendFile(path.join(path_to_root_folder, "frontend", "build", "index.html"));
  })
} else {
  app.get("/", (req, res, next) => {
    res.json({
      mode: "development",
      message: "the api is runnig ..."
    })
  })
}




// initialising the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT} ...`)
})