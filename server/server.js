const express = require("express");
const cors = require("cors");
const models = require("./models");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.get("/products", (req, res) => {
  models.Product.findAll({
    order: [["createdAt", "DESC"]],
    attributes: ['id', 'name', 'price', 'createdAt', 'seller', 'imageUrl']
  }).then((result) => {
    console.log("PRODUCTS : ", result)
    res.send({
      products: result
    })
  }).catch((err) => {
    console.error(err)
    res.send("에러발생")
  })
})

app.get("/products/:id", (req, res) => {
  const { id } = req.params
  models.Product.findOne({
    where: {
      id: id
    }
  }).then((result) => {
    console.log("PRODUCT : ", result)
    res.send({
      product: result
    })
  }).catch((err) => {
    console.error(err)
    res.send("상품 조회 에러 발생")
  })
})

app.post("/products", (req, res) => {
  const { name, description, price, seller } = req.body
  if (!(name && description && price && seller)) {
    res.send("모든 필드를 입력하세요")
  }
  models.Product.create({
    name,
    description,
    price,
    seller
  }).then((result) => {
    console.log("상품 생성 결과 ", result)
    res.send({
      result,
    })
  }).catch((err) => {
    console.error(err)
    res.send("업로드에 문제가 발생했습니다.")
  })
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
