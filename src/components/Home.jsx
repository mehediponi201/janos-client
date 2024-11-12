import Banner from "./Banner";
// import Carousel from "./Carousel";
import Clients from "./Clients";
import OfferPage from "./OfferPage";
import Services from "./Services";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           {/* <Carousel></Carousel> */}
           <Services></Services>
           <Clients></Clients>
           <OfferPage></OfferPage>
        </div>
    );
};

export default Home;