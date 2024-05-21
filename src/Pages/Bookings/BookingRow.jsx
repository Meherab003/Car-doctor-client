const BookingRow = ({ booking, handleDelete }) => {
    // console.log(booking)
    const { _id, customerName, date, service, price } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-gray-700 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{service}</div>
                    </div>
                </div>
            </td>
            <td className="font-medium">
                $ {price}
            </td>
            <td className="font-medium">{date}</td>
            <th>
                <button className="btn bg-primary text-white btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;