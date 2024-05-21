import { useContext, useEffect, useState } from "react";
import SecondBanner from "../Shared/SecondBanner/SecondBanner";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const bannerText = "Car Details"
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = id => {
        const proceed = confirm("are you sure  you to delete?");
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
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
                            handleDelete={handleDelete}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;