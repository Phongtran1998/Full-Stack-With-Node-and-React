module.exports = app => {
  require("./authRoutes")(app);
  require("./mainRoutes")(app);
};
