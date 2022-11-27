const express = require("express");
const cors = require("cors");
const models = require("./models");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  console.log(req.query);
  res.send({
    products: [
      {
        id: 1,
        name: "농구공",
        price: 100000,
        seller: "조던",
        imageUrl: "images/products/basketball1.jpeg",
      },
      {
        id: 2,
        name: "축구공",
        price: 50000,
        seller: "메시",
        imageUrl: "images/products/soccerball1.jpg",
      },
      {
        id: 3,
        name: "키보드",
        price: 10000,
        seller: "그랩",
        imageUrl: "images/products/keyboard1.jpg",
      },
    ],
  });
});

app.get("/products/:id/events/:eventId", (req, res) => {
  const { id, eventId } = req.params
  res.send(`id는 ${id} 와 ${eventId}입니다.`)
})

app.post("/products", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
  models.sequelize.sync().then(() => {
    console.log("DB connected!")
  }).catch((err) => {
    console.error(err)
    process.exit()
  })
});
