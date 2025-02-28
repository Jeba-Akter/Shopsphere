import Footer from "../components/footer";
import MenCloth from "../components/MenCloth";
import Navber1 from "../components/Navber1";
import Navber2 from "../components/Navber2";
import Navber3 from "../components/Navber3";
import Offer from "../components/Offer";
import Offer2 from "../components/Offer2";
import Slider from "../components/Slider";
import WomenCloth from "../components/WomenCloth";


const Pages = () => {
    return (
        <div>
            <Navber1></Navber1>
            <Navber2></Navber2>
            <Navber3></Navber3>
            <Slider></Slider>
            <Offer></Offer>
            <MenCloth></MenCloth>
            <Offer2></Offer2>
            <WomenCloth></WomenCloth>
            <Footer></Footer>
            
            
            
            
        </div>
    );
};

export default Pages;