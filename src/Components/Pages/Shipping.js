import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getTotalPrice } from "../../Utilities/AddTodb";
import '../Css/Shipping.css';
import Fotter from "../Shared/Fotter";
import Header from "../Shared/Header";
import Title from "../Shared/Title";

const Shipping = () => {
  const [information, setInformation] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    number: "",
    address:"",
    otherError: "",
  });

  const [price,setPrice] = useState(0)

  let shippingData = Object.values(getTotalPrice())
  
  useEffect(()=>{
    function calculation(shipping){
      let sum = 0;
      for (let i = 0; i < shipping.length; i++) {
        const element = shipping[i];
        sum+= element
        
      }
      setPrice(sum)
    }
    calculation(shippingData);
  },[shippingData])

  const handleNameForm = (event) => {
    setInformation({ ...information, name: event.target.value });
  };
  const handleNumberForm = (event) => {
    setInformation({ ...information, number: event.target.value });
  };
  const handleaddressform = (event) => {
    setInformation({ ...information, address: event.target.value });
  };
  const handleEmailForm = (event) => {
    const regex = /.+@[^@]+\.[^@]{2,}$/.test(event.target.value);
    if (regex) {
      setInformation({ ...information, email: event.target.value });
      setError({ ...error, email: "" });
    } else {
      setError({ ...error, email: "invalid email" });
      setInformation({ ...information, email: "" });
    }
  };

  console.log(information);

  const handleSubmit = () => {};
  return (
    <div>
      <Title title="shipping"></Title>
      <Header></Header>
      <div className="container">
        <div className="row">
        <div className=" col-md-6 mx-auto form-style shadow p-5 mt-5">
              <h3 className="text">Payable Total: ${price}</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    onChange={handleNameForm}
                    type="text"
                    placeholder="Enter name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleEmailForm}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  <Form.Text className="text-danger">{error.email}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    onChange={handleNumberForm}
                    type="number"
                    placeholder="Enter your number"
                    required
                  />
                  <Form.Text className="text-danger">{error.number}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={handleaddressform}
                    type="text"
                    placeholder="Enter your address"
                    required
                  />
                  <Form.Text className="text-danger">{error.address}</Form.Text>
                </Form.Group>


                <Form.Text className="text-danger">
                  {error.otherError}
                </Form.Text>

              </Form>
              <div className="mt-4">
                <div
                  className="w-100"
                  style={{ border: "1px solid #6c757d", height: "1px" }}
                ></div>
              </div>
            <div className="text-end mt-4">
             <span className="cancel-btn text-right ">Cancel Order</span>
               <span className="order-btn text-right ">Place Order</span>
            </div>
            </div>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default Shipping;
