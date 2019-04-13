const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require("cookie-session");
const config = require("./config");
const app = express();
mongoose.connect("mongodb://localhost/personal", {
  useCreateIndex: true,
  useNewUrlParser: true
});
require("./models/User");
require("./models/Crossfire");
app.use(bodyParser.json({ type: "*/*" }));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 100,
    keys: [config.cookieSecret]
  })
);
require("./services/passport");
app.use(passport.initialize());
app.use(passport.session());
require("./routes/router")(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("listen on ", port);
});
