import Fotter from "../Shared/Fotter";
import Header from "../Shared/Header";
import Title from "../Shared/Title";
import About from "./About";
import Banner from "./Banner";
import Description from "./Description";
import UserMap from "./UserMap";

const Home = () => {
    return (
        <div>
            <Title title="Home"></Title>
            <Header></Header>
            <Banner></Banner>
            <Description></Description>
            <About></About>
            <UserMap></UserMap>
            <Fotter></Fotter>
        </div>
    );
};

export default Home;