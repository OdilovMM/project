import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.jsx";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/api/products");
      setProducts(data);
      // console.log(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      {products.length > 0 ? (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default HomeScreen;
