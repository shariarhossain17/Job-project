import { Helmet } from "react-helmet";

const Title = ({title}) => {
    return (
        <div>
             <Helmet>
             <title>{title} Adriano Shop</title>
            </Helmet>
        </div>
    );
};

export default Title;