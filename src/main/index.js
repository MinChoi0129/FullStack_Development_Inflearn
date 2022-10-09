import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://d7601ded-74a9-431c-a63a-9397a282c0c3.mock.pstmn.io/products"
      )
      .then((result) => {
        console.log(result);
        setProducts(result.data.products);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <img src="./images/banners/banner1.png" alt="" />
        <h1>판매상품</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div key={product.id} className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} alt="" />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="./images/icons/avatar.png"
                      alt=""
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
