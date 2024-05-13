import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'

const NavBar = () => {

    const navLinks = <>
        <li><NavLink className='font-medium' to='/'>Home</NavLink></li>
        <li><NavLink className='font-medium' to='/about'>About</NavLink></li>
        <li><NavLink className='font-medium' to='/services'>Services</NavLink></li>
        <li><NavLink className='font-medium' to='/blog'>Blog</NavLink></li>
        <li><NavLink className='font-medium' to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="md:px-10 lg:px-14">
            <nav className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="w-14 md:w-20"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-12 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn text-[#ff3811] btn-outline hover:bg-[#ff3811] hover:border-[#ff3811]">Appointment</a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;