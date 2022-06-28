import Fotter from "../Shared/Fotter";
import Title from "../Shared/Title";
import About from "./About";
import Banner from "./Banner";
import Description from "./Description";
import UserMap from "./UserMap";

const Home = () => {
    return (
        <div>
            <Title title="Home"></Title>
            <Banner></Banner>
            <Description></Description>
            <About></About>
            <UserMap></UserMap>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;