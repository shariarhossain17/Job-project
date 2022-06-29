import { useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-creative";
import useCart from "../../Hooks/useCart";
import { addToStorage } from "../../Utilities/AddTodb";
import data from "../data";
import Fotter from "../Shared/Fotter";
import Header from "../Shared/Header";

const Details = () => {
  const [cart,setCart] = useCart();
  console.log(cart);
 
  
  const { id } = useParams();
  const product = data.find((p) => p.id == id);
  const [reload,setReload] = useState(false)

  const addToCart = () => {
   
    let newProduct = []
    const exist = cart.find(c => c.id == product.id)
    console.log(exist);

    if(!exist){
      product.quantity = 1;
      newProduct = [...cart,product]
    }
    else{
      const rest = cart.filter(c => cart.id != product.id)
      exist.quantity = exist.quantity + 1;
      newProduct = [...rest,exist]
    }
    
    addToStorage(product.id)
    setCart(newProduct)
    setReload(!reload)
  
}

  return (
    <div>
      <Header></Header>
      <title title="details"></title>
      <div className="container mt-5">
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
                  <h5>Cart:</h5>
                </Card.Text>
                <button className="btn-style" onClick={addToCart}>Add To Cart</button>
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
