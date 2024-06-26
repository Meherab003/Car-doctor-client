import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginPhoto from '../../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            }
            )
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="hero items-center">
                <div className="hero-content flex-col lg:flex-row gap-16 justify-between">
                    <div>
                        <img src={loginPhoto} alt="" />
                    </div>
                    <div className="w-1/2 border rounded-xl bg-white p-10">
                        <h2 className='text-4xl font-semibold text-center'>Sign Up</h2>
                        <form onSubmit={handleSignUp} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Confirm Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-primary text-white hover:text-black">Sign Up</button>
                            </div>
                        </form>
                        <div className='flex flex-col gap-5 my-8'>
                            <h2 className='text-center text-sm text-[#444444]'>Or Sign Up With</h2>
                            <div className='flex justify-evenly items-center'>
                                <button className='btn btn-circle text-2xl'><FaFacebook /></button>
                                <button className='btn btn-circle text-2xl'><FaLinkedin /></button>
                                <button className='btn btn-circle text-2xl'><FaGoogle /></button>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#737373] text-center'>Already have an account? <Link to='/login' className='text-primary font-medium'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;