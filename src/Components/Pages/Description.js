import { Container, Row } from "react-bootstrap";
import data from '../data';
import Product from "./Product";

const Description = () => {
 
  return (
    <div id="description">
      <title title="Description"></title>

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
