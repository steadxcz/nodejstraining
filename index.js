const express = require("express");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

async function connectdb() {
  await mongoose.connect(
    "mongodb+srv://root:root@cluster1.zhzbo1d.mongodb.net/?retryWrites=true&w=majority"
  );
}

const Cat = mongoose.model("Cat2", { name: String, tyep: String });

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
