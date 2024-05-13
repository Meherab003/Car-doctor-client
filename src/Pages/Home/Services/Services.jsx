import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center flex flex-col gap-5">
                <h3 className="text-lg text-primary font-bold">Services</h3>
                <h2 className="text-5xl font-bold text-black">Our Service Area</h2>
                <p className="text-gray-600 w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;