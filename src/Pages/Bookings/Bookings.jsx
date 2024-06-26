import { useContext, useEffect, useState } from "react";
import SecondBanner from "../Shared/SecondBanner/SecondBanner";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
    const bannerText = "Car Details"
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();


    // const url = `https://car-doctor-server-3r62klef4-meherab-hossain-bhuiyans-projects.vercel.app/bookings?email=${user.email}`;
    const url = `/bookings?email=${user.email}`;
    useEffect(() => {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))


        // axios.get(url, {withCredentials: true})
        // .then(res => {
        //     setBookings(res.data)
        // })

        axiosSecure.get(url)
        .then(res => setBookings(res.data))
    }, [url, axiosSecure])

    const handleDelete = id => {
        const proceed = confirm("are you sure  you to delete?");
        if (proceed) {
            fetch(`https://car-doctor-server-3r62klef4-meherab-hossain-bhuiyans-projects.vercel.app/bookings/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                        alert("deleted Successful");
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })

        }
    }

    const handleConfirm = id => {
        fetch(`https://car-doctor-server-3r62klef4-meherab-hossain-bhuiyans-projects.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json",
            },
            body: JSON.stringify({status: "confirm"})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                //update state
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings)
            }
        })
    }
    return (
        <div className="lg:px-16">
            <SecondBanner bannerText={bannerText}></SecondBanner>
            <div className="overflow-x-auto my-5 border rounded-2xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking}
                            handleDelete={handleDelete}
                            handleConfirm={handleConfirm}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;