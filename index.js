const express = require("express");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

async function connectdb() {
  await mongoose.connect(process.env.MONGO_URI);
}

const Cat = mongoose.model("users", { login: String, password: String });

try {
  app.listen(PORT);
  connectdb();

  console.log(`app runin on ${PORT}`);
} catch (e) {
  console.error(e);
}

app.get("/", (req, res) => {
  const kitty = new Cat({ name: "Zildjian2", tyep: "asf" });
  kitty.save().then(() => console.log("meow"));
  res.end("123");
});
