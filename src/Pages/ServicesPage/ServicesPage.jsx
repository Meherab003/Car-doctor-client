import { useLoaderData } from "react-router-dom";
import SecondBanner from "../Shared/SecondBanner/SecondBanner";

const ServicesPage = () => {
    const bannerText = "Services";
    const service = useLoaderData();
    const {title, price, _id} = service;
    return (
        <div className="px-3 md:px-12 lg:px-16">
            <SecondBanner bannerText={bannerText}></SecondBanner>
            <h2>book: {service.title}</h2>
        </div>
    );
};

export default ServicesPage;