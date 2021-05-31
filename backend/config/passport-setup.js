const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const { User } = require("../models/user");


passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
  // find the user in the database

  try {
    const currentUser = await User.findOne({ _id: id });
    if (currentUser) {
      // when you find it call done
      done(null, currentUser);
    }
  } catch (error) {
    done(error)
  }

})

const options = {
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: "/auth/google/redirect"
}
const passportCallbackFunction = async (accessToken, refreshToken, profile, done) => {

  console.log("this is the callback function")
  // check if the the user is already in the database
  const currentUser = await User.findOne({ googleID: profile.id });

  // if there is no user then create the currentUser
  if (!currentUser) {
    const newUser = await User.create({
      googleID: profile.id,
      name: profile.displayName,
      profileImgURL: profile.photos[0].value
    })
    done(null, currentUser);
    return;
  }

  // if there is a user in the database
  done(null, currentUser);

}

passport.use(new GoogleStrategy(options, passportCallbackFunction))
