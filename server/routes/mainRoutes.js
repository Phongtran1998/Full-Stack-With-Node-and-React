const requireAuth = require("../middlewares/requireAuth");
const MainPageController = require("../controllers/MainPage");

module.exports = app => {
  app.post("/api/weapons", requireAuth, MainPageController.createWeapon);
  app.get("/api/weapons", requireAuth, MainPageController.fetchWeapons);
  app.put("/api/weapons/:id", requireAuth, MainPageController.editWeapon);
  app.delete("/api/weapons/:id", requireAuth, MainPageController.deleteWeapon);
};
