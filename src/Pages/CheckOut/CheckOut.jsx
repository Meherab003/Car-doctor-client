import { useLoaderData } from "react-router-dom";
import SecondBanner from "../Shared/SecondBanner/SecondBanner";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
    const bannerText = "Check Out"
    const service = useLoaderData();
    const { title, _id, price } = service;
    const{user} = useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const order = {
            customerName: name,
            email,
            date,
            service: title,
            service_id: _id,
            price,
        }
        console.log(order)

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className="lg:px-16">
            <SecondBanner bannerText={bannerText}></SecondBanner>
            <div>
                <h2 className="text-center text-4xl font-semibold py-2">Service: {title}</h2>
                <form onSubmit={handleBookService} className="card-body grid grid-cols-2 bg-[#F3F3F3] rounded-2xl">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">{`Message(Optional)`}</span>
                        </label>
                        <textarea placeholder="Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="form-control mt-6 col-span-2">
                        <button className="btn bg-primary text-white hover:text-black">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;