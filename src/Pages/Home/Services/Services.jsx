import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-doctor-server-3r62klef4-meherab-hossain-bhuiyans-projects.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="flex flex-col gap-10 items-center">
            <div className="text-center flex flex-col gap-5">
                <h3 className="text-lg text-primary font-bold">Services</h3>
                <h2 className="text-5xl font-bold text-black">Our Service Area</h2>
                <p className="text-gray-600 w-2/3 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)
                }
            </div>
            <button className="btn btn-outline md:w-1/5 items-center text-primary hover:bg-[var(--prime)] hover:border-[var(--prime)]">More Services</button>
        </div>
    );
};

export default Services;