const CoreFeatureCard = ({feature}) => {
    return (
        <div className="bg-orange-200 hover:bg-orange-300 p-5 rounded-xl">
            <div className="flex flex-col items-center gap-3">
                <div className=" flex  items-center">
                    <img src={feature.img} alt="" />
                </div>
                <p className="font-bold">{feature.description}</p>
            </div>
        </div>
    );
};

export default CoreFeatureCard;