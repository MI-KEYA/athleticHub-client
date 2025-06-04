import React from 'react';
import { NavLink } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import Lottie from 'lottie-react';
import loginLottie from '../assets/signIn.json'

const Login = () => {
    return (

        <div className="hero  lg:mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie style={{ width: '300px' }} animationData={loginLottie} loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className='mt-10 text-center  text-xl lg:text-3xl font-bold'>Login Your Account</h1>
                    <div className="card-body">
                        <form className="fieldset">

                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Enter Your Email"
                            ></input>
                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input"
                                placeholder="Enter Your Password"
                            />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn bg-blue-950 text-white border-none btn-neutral mt-4">Login</button>
                            <button
                                type='button'
                                className="btn btn-outline  mt-2"

                            >
                                <FcGoogle />
                                Continue with Google
                            </button>
                            <p className='pt-3 text-center font-semibold'>Don't Have An account?<NavLink to='/auth/register' className='text-blue-900'>Register</NavLink></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;