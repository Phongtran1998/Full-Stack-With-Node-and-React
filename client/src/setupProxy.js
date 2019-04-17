const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/*", { target: "http://localhost:4000/" }));
  app.use(
    proxy("/auth/facebook/callback", { target: "http://localhost:4000" })
  );
  app.use(proxy("/api/*", { target: "http://localhost:4000" }));
  app.use(proxy("/api/weapons/*", { target: "http://localhost:4000" }));
};
