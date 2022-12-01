import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

function MainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
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
      <img src="./images/banners/banner1.png" alt="" />
      <h1>판매상품</h1>
      <div id="product-list">
        {products.map((product, idx) => {
          return (
            <div key={product.id} className="product-card">
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img className="product-img" src={product.imageUrl} alt="" />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>

                  <div className="product-footer">
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="./images/icons/avatar.png"
                        alt=""
                      />
                      <span>{product.seller}</span>
                    </div>
                    <span className="product-date">{dayjs(product.createdAt).fromNow()}</span>
                  </div>

                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
