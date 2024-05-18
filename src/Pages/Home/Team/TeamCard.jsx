import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamCard = ({person}) => {
    return (
        <div className="border rounded-xl">
            <div className="p-5 pb-0">
                <img className="w-full object-cover rounded-xl" src={person.img} alt="" />
            </div>
            <div className="flex flex-col items-center gap-2 py-3">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="">{person.job}</p>
                <div className="flex items-center justify-center gap-4 text-2xl">
                    <div className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"><FaFacebook className="text-blue-600" /></div>
                    <div className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"><FaTwitter  className="text-blue-500"/></div>
                    <div className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"><FaLinkedin className="text-blue-700"/></div>
                    <div className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"><FaInstagram className="text-pink-600"/></div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;