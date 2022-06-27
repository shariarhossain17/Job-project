import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams()
    return (
        <div>
            <title></title>
            <h1>hello</h1>
        </div>
    );
};

export default Details;