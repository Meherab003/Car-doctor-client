import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import loginPhoto from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';
const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);


    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                const user = { email };

                //get access token
                axios.post(`http://localhost:5000/jwt`, user, {withCredentials: true})
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/');

                        }
                    })
            })
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
                        <h2 className='text-4xl font-semibold text-center'>Login</h2>
                        <form onSubmit={handleLogin} className="">
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
                                <button className="btn bg-primary text-white hover:text-black">Login</button>
                            </div>
                        </form>
                        <div className='flex flex-col gap-5 my-8'>
                            <h2 className='text-center text-sm text-[#444444]'>Or Sign In With</h2>
                            <div className='flex justify-evenly items-center'>
                                <button className='btn btn-circle text-2xl'><FaFacebook /></button>
                                <button className='btn btn-circle text-2xl'><FaLinkedin /></button>
                                <button className='btn btn-circle text-2xl'><FaGoogle /></button>
                            </div>
                        </div>
                        <div>
                            <p className='text-[#737373] text-center'>Dont have an account? <Link to='/signup' className='text-primary font-medium'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;