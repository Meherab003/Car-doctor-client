import About from "./About/About";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="px-3 md:px-12 lg:px-14">
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;