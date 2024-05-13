import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className='px-3 md:px-12 lg:px-14 md:h-[85vh]'>
            <div className="carousel w-full h-full rounded-3xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full object-cover" />
                    <div className="absolute flex justify-start gap-5 left-0 top-0 h-full w-full md:items-center  pt-3 md:pt-0 pl-3 lg:pl-24 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        <div className='text-white flex flex-col gap-1 lg:gap-8 w-full lg:w-1/3'>
                            <h2 className='text-xl lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-sm lg:btn-md bg-[#ff3811] border-none text-white hover:text-[#ff3811]'>Discover More</button>
                                <button className='btn btn-sm lg:btn-md btn-outline text-[#ff3811] hover:bg-[#ff3811] hover:border-[#ff3811]'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-2 md:right-10 bottom-0 md:bottom-5">
                        <a href="#slide4" className="btn btn-circle btn-sm md:btn-md bg-opacity-20 border-none text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full object-cover" />
                    <div className="absolute flex justify-start gap-5 left-0 top-0 h-full w-full items-center pl-3 lg:pl-24 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        <div className='text-white flex flex-col gap-1 lg:gap-8 w-full lg:w-1/3'>
                            <h2 className='text-xl lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-sm lg:btn-md bg-[#ff3811] border-none text-white hover:text-[#ff3811]'>Discover More</button>
                                <button className='btn btn-sm lg:btn-md btn-outline text-[#ff3811] hover:bg-[#ff3811] hover:border-[#ff3811]'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-2 md:right-10 bottom-0 md:bottom-5">
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-opacity-20 border-none text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full object-cover" />
                    <div className="absolute flex justify-start gap-5 left-0 top-0 h-full w-full items-center pl-3 lg:pl-24 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        <div className='text-white flex flex-col gap-1 lg:gap-8 w-full lg:w-1/3'>
                            <h2 className='text-xl lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-sm lg:btn-md bg-[#ff3811] border-none text-white hover:text-[#ff3811]'>Discover More</button>
                                <button className='btn btn-sm lg:btn-md btn-outline text-[#ff3811] hover:bg-[#ff3811] hover:border-[#ff3811]'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-2 md:right-10 bottom-0 md:bottom-5">
                        <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-opacity-20 border-none text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle btn-sm md:btn-md bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full object-cover" />
                    <div className="absolute flex justify-start gap-5 left-0 top-0 h-full w-full items-center pl-3 lg:pl-24 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        <div className='text-white flex flex-col gap-1 lg:gap-8 w-full lg:w-1/3'>
                            <h2 className='text-xl lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-sm lg:btn-md bg-[#ff3811] border-none text-white hover:text-[#ff3811]'>Discover More</button>
                                <button className='btn btn-sm lg:btn-md btn-outline text-[#ff3811] hover:bg-[#ff3811] hover:border-[#ff3811]'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-2 md:right-10 bottom-0 md:bottom-5">
                        <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-opacity-20 border-none text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img5} className="w-full object-cover" />
                    <div className="absolute flex justify-start gap-5 left-0 top-0 h-full w-full items-center pl-3 lg:pl-24 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        <div className='text-white flex flex-col gap-1 lg:gap-8 w-full lg:w-1/3'>
                            <h2 className='text-xl lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-sm lg:btn-md bg-[#ff3811] border-none text-white hover:text-[#ff3811]'>Discover More</button>
                                <button className='btn btn-sm lg:btn-md btn-outline text-[#ff3811] hover:bg-[#ff3811] hover:border-[#ff3811]'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-2 md:right-10 bottom-0 md:bottom-5">
                        <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-opacity-20 border-none text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img6} className="w-full object-cover" />
                    <div className="absolute flex justify-start gap-5 left-0 top-0 h-full w-full items-center pl-3 lg:pl-24 bg-gradient-to-r from-[#151515] to-[#15151500]">
                        <div className='text-white flex flex-col gap-1 lg:gap-8 w-full lg:w-1/3'>
                            <h2 className='text-xl lg:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p className='text-sm lg:text-lg'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-5'>
                                <button className='btn btn-sm lg:btn-md bg-[#ff3811] border-none text-white hover:text-[#ff3811]'>Discover More</button>
                                <button className='btn btn-sm lg:btn-md btn-outline text-[#ff3811] hover:bg-[#ff3811] hover:border-[#ff3811]'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-2 md:right-10 bottom-0 md:bottom-5">
                        <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-opacity-20 border-none text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-[#ff3811] border-none text-white">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;