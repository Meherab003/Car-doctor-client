import quote from '../../../assets/icons/quote.svg'

const Testimonial = () => {
    const comments = [
        {
            id: "01",
            img: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
            name: "Awlad Hossain",
            job: "Businessman",
            words: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
        },
        {
            id: "02",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
            name: "Awlada Akhter",
            job: "Businessman",
            words: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
        }
    ]
    return (
        <div className="flex flex-col gap-10 items-center my-24">
            <div className="text-center flex flex-col gap-5">
                <h3 className="text-lg text-primary font-bold">Testimonial</h3>
                <h2 className="text-5xl font-bold text-black">What Customer Says</h2>
                <p className="text-gray-600 w-2/3 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomized words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    comments.map(comment => <div key={comment.id}>
                        <div className='p-10 border rounded-xl'>
                            <div className='flex items-center justify-between'>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <img className="w-12 h-12 object-cover rounded-full" src={comment.img} alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl font-bold">{comment.name}</h2>
                                        <p className="font-semibold">{comment.job}</p>
                                    </div>
                                </div>
                                <div>
                                    <img className='w-16' src={quote} alt="" />
                                </div>
                            </div>
                            <div className='py-5 flex flex-col gap-3'>
                                <p className='text-[#737373]'>{comment.words}</p>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;