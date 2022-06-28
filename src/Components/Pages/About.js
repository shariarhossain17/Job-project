import Fade from 'react-reveal/Fade';
const About = () => {
    return (
        <div id="about" className="text-center mt-5">
          <Fade bottom>
          <Fade zoom>
          <h1>About</h1>
          </Fade>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12">
                  <Fade right>
                  <p>Arduino is an open-source hardware and software company, project, and user community that designs and manufactures single-board microcontrollers and Arduino board can be powered by using the USB cable from your computer. All you need to do is connect the USB cable to the USB connection.The function of the voltage regulator is to control the voltage given to the Arduino board and stabilize the DC voltages used by the processor and other elements.</p>
                  </Fade>
                    </div>
                </div>
            </div>
          </Fade>
        </div>
    );
};

export default About;