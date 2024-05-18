import per1 from '../../../assets/images/team/1.jpg';
import per2 from '../../../assets/images/team/2.jpg';
import per3 from '../../../assets/images/team/3.jpg';
import TeamCard from './TeamCard';

const Team = () => {
    const team = [
        {
            "_id": "01",
            "img": per1,
            "name": "Car Engine Plug",
            "job": "Engine Expert",
        },
        {
            "_id": "02",
            "img": per2,
            "name": "Car Engine Plug",
            "job": "Engine Expert",
        },
        {
            "_id": "03",
            "img": per3,
            "name": "Car Engine Plug",
            "job": "Engine Expert",
        },
    ]

    return (
        <div className="flex flex-col gap-10 items-center my-24">
            <div className="text-center flex flex-col gap-5">
                <h3 className="text-lg text-primary font-bold">Team</h3>
                <h2 className="text-5xl font-bold text-black">Meet Our Team</h2>
                <p className="text-gray-600 w-2/3 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                  team.map(person => <TeamCard key={person._id} person={person}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;