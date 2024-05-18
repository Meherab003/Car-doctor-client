import About from "./About/About";
import Banner from "./Banner/Banner";
import ContectSection from "./Contect/ContectSection";
import CoreFeatures from "./CoreFeatures/CoreFeatures";
import PopularProduct from "./PopularProducts/PopularProduct";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="px-3 md:px-12 lg:px-14">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContectSection></ContectSection>
            <PopularProduct></PopularProduct>
            <Team></Team>
            <CoreFeatures></CoreFeatures>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;