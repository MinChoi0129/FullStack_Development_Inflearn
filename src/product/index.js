import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

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
  console.log(product);
  return <h1>상품페이지{params.id}</h1>;
}

export default ProductComponent;
