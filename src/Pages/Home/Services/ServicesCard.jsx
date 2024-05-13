import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    // console.log(service)
    const { title, img, price } = service;
    // console.log(service.title)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border">
                <figure className="px-5 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl md:h-52 w-full" />
                </figure>
                <div className="card-body p-5">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className="flex items-center justify-between">
                        <p className="font-medium text-primary">Price: ${price}</p>
                        <Link className="font-medium text-primary flex justify-end"><FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;