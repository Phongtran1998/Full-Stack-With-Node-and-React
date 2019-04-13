const mongoose = require("mongoose");
const { Schema } = mongoose;

const CrossfireSchema = new Schema({
  weapon: { type: String, unique: true },
  model: { type: String, default: "original" },
  price: { type: Number, default: 15000 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date
});

mongoose.model("Crossfire", CrossfireSchema);
