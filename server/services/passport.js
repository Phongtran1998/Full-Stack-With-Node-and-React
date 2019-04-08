const passport = require("passport");
const config = require("../config");
const mongoose = require("mongoose");
const LocalStrategy = require("passport-local");
const FacebookStrategy = require("passport-facebook").Strategy;

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

const loginLocal = new LocalStrategy(
  { usernameField: "email", proxy: true },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false);
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return done(err, false);
        }
        if (!isMatch) {
          return done(null, false);
        }
        return done(null, user);
      });
    } catch (err) {
      done(err, false);
    }
  }
);

const facebookLogin = new FacebookStrategy(
  {
    clientID: config.facebookClientId,
    clientSecret: config.facebookClientSecret,
    callbackURL: "/auth/facebook/callback",
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await User.findOne({ facebookId: profile.id });
      if (user) {
        return done(null, user);
      }
      const newUser = new User({ facebookId: profile.id });
      await newUser.save();
      done(null, newUser);
    } catch (err) {
      done(err, false);
    }
  }
);

passport.use(loginLocal);
passport.use(facebookLogin);
