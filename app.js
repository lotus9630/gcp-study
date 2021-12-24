const express = require("express");
const app = express();

app.set("port", 8080);

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
