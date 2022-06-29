import { useState } from "react";
import { Card } from "react-bootstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-creative";
import useCart from "../../Hooks/useCart";
import { addToPrice, addToPriceDecrease, addToStorage, addToStorageDecrease } from "../../Utilities/AddTodb";
import "../Css/Detail.css";
import data from "../data";
import Fotter from "../Shared/Fotter";
import Header from "../Shared/Header";

const Details = () => {
  const [cart, setCart] = useCart();
  const { id } = useParams();
  const product = data.find((p) => p.id == id);
  const [reload, setReload] = useState(false);
  const [inputeValue,setInputValue] = useState(0)

  const addToCart = () => {
    let newProduct = [];
    const exist = cart.find((c) => c.id == product.id);

    if (!exist) {
      product.quantity = 1;
      newProduct = [...cart, product];
    } else {
      const rest = cart.filter((c) => cart.id != product.id);
      exist.quantity = exist.quantity + 1;
      newProduct = [...rest, exist];
    }
    setInputValue(inputeValue + 1)

    addToStorage(product.id);
    addToPrice(product.id, product.price);
    setCart(newProduct);
    setReload(!reload);
  };
  const addToDecrease = () => {
    let newProduct = [];
    const exist = cart.find((c) => c.id == product.id);

    if (!exist) {
      product.quantity = 1;
      newProduct = [...cart, product];
    } else {
      const rest = cart.filter((c) => cart.id != product.id);
      exist.quantity = exist.quantity - 1;
      newProduct = [...rest, exist];
    }
   if(inputeValue > 0){
    setInputValue(inputeValue - 1)
   }
    
    addToStorageDecrease(product.id);
    addToPriceDecrease(product.id, product.price);
    setCart(newProduct);
    setReload(!reload);
  };

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
                  <div className="d-flex align-items-center">
                  <div onClick={addToDecrease}  className="decrease">
                  <FaMinus className="decrese-btn"></FaMinus>
                  </div>
                    <input   className="input-type" readOnly type="text" min={0} placeholder={inputeValue}/>
                   
                    <div onClick={addToCart} className="decrease">
                    <FaPlus  className="increase-btn"></FaPlus>
                    </div>
                   
                  </div>
                </Card.Text>
               <Link to='/shipping'>
               <button className="btn-style" >
                  Go To Cart
                </button>
               </Link>
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
