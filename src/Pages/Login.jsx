import React from 'react';
import { NavLink } from 'react-router';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div className='flex justify-center items-center pt-10'>
                {/* <Helmet><title>PlantCare | Login</title></Helmet> */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <form className="card-body">
                        <h2 className='text-center font-semibold text-2xl py-5'>Login Your Account</h2>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Enter Your Email"
                            />

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
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;