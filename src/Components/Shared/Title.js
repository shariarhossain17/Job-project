import { Helmet } from "react-helmet";

const Title = ({title}) => {
    return (
        <div>
             <Helmet>
             <title>{title} Adriano shop</title>
            </Helmet>
        </div>
    );
};

export default Title;