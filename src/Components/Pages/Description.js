import { Container, Row } from "react-bootstrap";
import data from '../data';
import Product from "./Product";

const Description = () => {
 
  return (
    <div id="description">
      <title title="Description"></title>
    <h1 className="text-center mt-5">Description</h1>
      <Container className="mt-5 mb-5">
        <Row>
            {data.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}

        </Row>
      </Container>
    </div>
  );
};

export default Description;
