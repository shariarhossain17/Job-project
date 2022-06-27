import img from '../../assets/audriano.png';
const Banner = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-12">
                    <img className='img-fluid' style={{width:"100%",height:"70vh"}} src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;