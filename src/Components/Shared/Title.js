import { Helmet } from "react-helmet";

const Title = ({title}) => {
    return (
        <div>
             <Helmet>
             <title>{title} Map intergate</title>
            </Helmet>
        </div>
    );
};

export default Title;