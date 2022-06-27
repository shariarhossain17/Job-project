import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
    const {id,picture,name,price,desc} = product;

    const navigate = useNavigate()
    return (
        <Col md={4}>
        <Card className="p-2" style={{ width: '18rem' }}>
        <Card.Img className="" height="200px" width="250px"  variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Price:{price}
          </Card.Text>
          <Button onClick={()=>navigate(`/adriano-product/${id}`)} variant="primary">Details</Button>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default Product;