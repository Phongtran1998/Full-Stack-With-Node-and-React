const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  googleId: String,
  facebookId: String
});

UserSchema.pre("save", function(next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });
});
UserSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};
mongoose.model("User", UserSchema);
