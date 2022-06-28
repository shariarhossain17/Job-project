import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Fade } from 'react-reveal';
import '../Css/Fotter.css';
const Fotter = () => {
    return (
        <div className="fotter">
            <Fade bottom>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                            <p className="font-bold text-white" href="#">Sitemap</p>
                            <a className="text-decoration-none text-muted d-block" href="#">Term of use</a>
                            <a className="text-decoration-none text-muted d-block" href="#">Privacy policy</a>
                    </div>
                    <div className="col-md-4">
                    <p className='font-bold text-white'>Address</p>
                    <a href="#" className='text-decoration-none text-muted d-block'>Location: khulna Bangladesh</a>
                    <a href="#" className='text-decoration-none text-muted'>Phone: +88 01xxxxxxxxx</a> <br />
                    <a href="#" className='text-decoration-none text-muted'>Email: shariarhossain23@gmail.com</a>
                    </div>
                    <div className="col-md-4">
                        <p className='font-bold text-white'>Social Network</p>
                        <a href="#" className='mt-2 text-decoration-none d-block  text-muted'><FaFacebook className='text-muted fs-5 mr-2'></FaFacebook> facebook</a> 
                        <a href="#" className='mt-2 text-decoration-none d-block  text-muted'><FaInstagram className='text-muted fs-5 mr-2'></FaInstagram> instagram</a> 
                        <a href="#" className='mt-2 text-decoration-none  d-block  text-muted'><FaLinkedin className='text-muted fs-5 mr-2'></FaLinkedin> instagram</a> 
                        <a href="#" className='mt-2 text-decoration-none d-block  text-muted'><FaTwitter className='text-muted fs-5 mr-2'></FaTwitter> instagram</a>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Fotter;