import { useState } from "react";
import { Carousel } from "react-bootstrap";
import img from "../../assets/download (4).jpg";
import img1 from "../../assets/download (5).jpg";
import img2 from "../../assets/download (6).jpg";

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
          style={{height:"400px"}}
        
            className="d-block w-100 img-fluid"
            src={img}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={{height:"400px"}}
            className="d-block w-100 img-fluid"
            src={img1}
            alt="Second slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={{height:"400px"}}
            className="d-block w-100 img-fluid"
            src={img2}
            alt="Third slide"
          />
  
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;