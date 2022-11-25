import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css"

function ProductComponent() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  console.log(product);
  useEffect(() => {
    axios
      .get(
        `https://d7601ded-74a9-431c-a63a-9397a282c0c3.mock.pstmn.io/products/${params.id}`
      )
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (product === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} alt=""/>
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt=""/>
        <span>{product.seller}</span>
      </div>
      <div id="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022.11.13</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductComponent;
