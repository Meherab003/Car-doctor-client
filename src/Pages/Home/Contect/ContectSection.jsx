import { IoCall, IoLocation } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

const ContectSection = () => {
    return (
        <div className="bg-[#151515] lg:p-20 text-white flex justify-between items-center rounded-xl my-28">
            <div className="flex items-center gap-5">
                <div>
                    <div className="text-3xl text-primary"><MdOutlineDateRange /></div>
                </div>
                <div className="flex flex-col">
                    <p className="font-medium">We are open monday-friday</p>
                    <p className="font-bold text-2xl">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div>
                    <div className="text-3xl text-primary"><IoCall /></div>
                </div>
                <div className="flex flex-col">
                    <p className="font-medium">Have a question?</p>
                    <p className="font-bold text-2xl">+2546 251 2658</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div>
                    <div className="text-3xl text-primary"><IoLocation /></div>
                </div>
                <div className="flex flex-col">
                    <p className="font-medium">Need a repair? our address</p>
                    <p className="font-bold text-2xl">Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default ContectSection;