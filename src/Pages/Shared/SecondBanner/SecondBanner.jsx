import checkoutImg from '../../../assets/images/checkout/checkout.png'

const SecondBanner = ({bannerText}) => {
    return (
        <div className="hero h-[40vh] rounded-2xl" style={{ backgroundImage: `url(${checkoutImg})` }}>
            <div className=" bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full justify-start p-24 text-white rounded-2xl">
                <div className="max-w-md bg-gradient from-[#151515] to-[#15151500]">
                    <h1 className="mb-5 text-5xl font-bold">{bannerText}</h1>
                    
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;