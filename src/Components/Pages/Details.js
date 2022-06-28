import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-creative";
import data from "../data";
import Fotter from "../Shared/Fotter";

const Details = () => {
  const { id } = useParams();
  const product = data.find((p) => p.id == id);

  return (
    <div className="mt-5">
      <title title="details"></title>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div className="text-center">
              <img src={product.pictur2} width="300px" height="250px" alt="" />
            </div>
            <h4>Overview</h4>
            <p>{product.desc}</p>
          </div>
          <div className="col-md-6">
            <Card className="py-5">
              <Card.Body>
                <Card.Title className="mb-4">{product.name}</Card.Title>
                <Card.Text>
                  <h4 className="mb-4">${product.price}</h4>
                </Card.Text>
                <Button>Add To Cart</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default Details;
