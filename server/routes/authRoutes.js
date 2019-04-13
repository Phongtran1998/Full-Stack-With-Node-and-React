const passport = require("passport");
const AuthenticationController = require("../controllers/Authentication");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send({ hello: "there" });
  });
  app.get("/thao", (req, res) => {
    res.send("lambada");
  });
  app.post(
    "/auth/emailsignup",
    AuthenticationController.signUpWithEmailAndPassword
  );
  app.post(
    "/auth/emailsignin",
    passport.authenticate("local"),
    AuthenticationController.signInWithEmailAndPassword
  );
  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: ["email"] })
  );
  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook"),
    AuthenticationController.facebookLogin
  );
  app.get("/api/current_user", AuthenticationController.currentUser);
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
