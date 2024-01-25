const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 9000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/hi", (req, res) => {
  console.log("get!");
  res.send({ message: "get!!" });
});

app.post("/", (req, res) => {
  console.log("post!", req.body); // req.body에 바로 데이터가 들어옴
  res.json({ message: "post!!" });
});

app.listen(PORT, () =>
  console.log(`Node.js Server is running on port ${PORT}....`)
);
