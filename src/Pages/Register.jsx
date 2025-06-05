import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, setUser, signInWithGoogle, updateUser } = use(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;

        console.log(name, password, email, photoURL)

        createUser(email, password)
            .then(res => {
                const user = res.user
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                        Swal.fire({
                            title: "Signed Up Successfully!",
                            icon: "success",
                            draggable: true,
                            timer: 1500
                        });
                        navigate("/")
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    })

            })
            .catch(err => {
                const errorMessage = err.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}`,

                });
            })


    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then((res) => {
                const user = res.user;
                setUser(user);
                Swal.fire({
                    title: "LoggedIn Successfully!",
                    icon: "success",
                    draggable: true,
                    timer: 1500
                });
                navigate('/')
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}`,

                });
            })
    }

    return (
        <div className='flex justify-center items-center pt-10'>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                <form onSubmit={handleSignUp} className="card-body">
                    <h2 className='text-center font-semibold text-2xl py-5'>Register Your Account</h2>
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter Your Name"
                            name='name' required
                        />

                        <label className="label">Photo URL</label>
                        <input
                            name='photoURL'
                            type="text"
                            className="input"
                            placeholder="Enter Your PhotoURL" required
                        />

                        <label className="label">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="input"
                            placeholder="Enter Your Email" required
                        />

                        <label className="label">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="input"
                            placeholder="Enter Your Password" required
                        />
                        {/* {passError && (
                            <p className="text-red-500 text-sm mt-1">{[passError]}</p>
                        )} */}
                        <button type='sumbit' className="btn bg-blue-950 text-white border-none btn-neutral mt-4">Register</button>
                        <button
                            type='button'
                            className="btn btn-outline border-blue-950 mt-2"
                            onClick={handleGoogleSignIn}
                        >
                            <FcGoogle />
                            Continue with Google
                        </button>
                        <p className='pt-3 text-center font-semibold'>Already Have An account?
                            <NavLink to='/auth/login' className='text-blue-800'>Login</NavLink>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;