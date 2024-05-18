import team from '../../../assets/icons/group.svg'
import time from '../../../assets/icons/Group 38729.svg'
import support from '../../../assets/icons/person.svg'
import equipt from '../../../assets/icons/Wrench.svg'
import guaranty from '../../../assets/icons/check.svg'
import delivery from '../../../assets/icons/deliveryt.svg'
import CoreFeatureCard from './CoreFeatureCard'

const CoreFeatures = () => {
    const features = [
        {
            id: "01",
            img: team,
            description: "Expert Team",
        },
        {
            id: "02",
            img: time,
            description: "Expert Team",
        },
        {
            id: "03",
            img: support,
            description: "Expert Team",
        },
        {
            id: "04",
            img: equipt,
            description: "Expert Team",
        },
        {
            id: "05",
            img: guaranty,
            description: "Expert Team",
        },
        {
            id: "06",
            img: delivery,
            description: "Expert Team",
        },
    ]

    return (
        <div className="flex flex-col gap-10 items-center my-24">
            <div className="text-center flex flex-col gap-5">
                <h3 className="text-lg text-primary font-bold">Core Features</h3>
                <h2 className="text-5xl font-bold text-black">Why Choose Us</h2>
                <p className="text-gray-600 w-2/3 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {
                  features.map(feature => <CoreFeatureCard key={feature.id} feature={feature}></CoreFeatureCard>)
                }
            </div>
        </div>
    );
};

export default CoreFeatures;