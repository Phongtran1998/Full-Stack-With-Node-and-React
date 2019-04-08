const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.signUpWithEmailAndPassword = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).send({ error: "Email is already in used" });
    }
    const newUser = new User({ email, password });
    await newUser.save();
    res.send(newUser);
  } catch (err) {
    next(err);
  }
};
//create a new route called /current_user
//redirect all the sign in route to it
exports.signInWithEmailAndPassword = async (req, res, next) => {
  res.redirect("/current_user");
};

exports.facebookLogin = async (req, res, next) => {
  res.redirect("/current_user");
};
exports.currentUser = (req, res) => {
  res.send(req.user);
};
