import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="md:min-h-screen py-5 flex items-center justify-center">
                <div className="flex w-full flex-col lg:flex-row">
                    <div className='lg:w-1/2 flex-1 relative'>
                        <img src={person} className="md:w-3/4 rounded-lg object-cover" />
                        <img src={parts} className="md:w-1/2 md:h-2/3 md:absolute rounded-lg left-1/3 top-1/3 border-8 border-white mt-3" />
                    </div>
                    <div className='lg:w-1/3 flex flex-col gap-3 md:gap-8'>
                        <h1 className="text-lg font-bold text-[#ff3811]">About Us</h1>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <div className='flex flex-col gap-1 md:gap-5'>
                            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                            <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
                        </div>
                        <button className="btn bg-[#ff3811] text-white hover:text-black md:w-1/3">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;