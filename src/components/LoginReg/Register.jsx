import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, googleSingIn, githubSingIn } = useContext(AuthContext);
    const [showError, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const from = event.target;
        const text = from.text.value;
        const email = from.email.value;
        const url = from.url.value;
        const password = from.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate(from);
                setError('')
                updateProfile(result.user, {
                    displayName: text, photoURL: url
                })

            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })

    }

    const handleGoogle = () => {
        googleSingIn()
            .then(result => {
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGitHub = () => {
        githubSingIn()
            .then(result => {
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <main className='py-20 bg-gray-100 border-b-2'>
            <div className="w-full max-w-sm p-4 border bg-white border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
                <form className="space-y-6" onSubmit={handleRegister}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register to Home Cooking</h5>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="Name" required></input>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@mail.com" required></input>
                    </div>
                    <div>
                        <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo URL</label>
                        <input type="url" name="url" id="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="Photo url" required></input>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required></input>
                        {
                            showError && <p className='text-red-500'>Password should be at least 6 characters</p>
                        }
                    </div>

                    <button type="submit" className="w-full text-white bg-orange-500 duration-300 hover:bg-orange-600 font-medium rounded-md text-sm px-5 py-2.5 text-center">Sing Up your account</button>
                    <div className='border'></div>
                    <h4 className='text-center text-lg font-semibold text-gray-700'>Sing Up with</h4>
                    <div className='flex items-center gap-4 justify-center'>
                        <img onClick={handleGoogle} className='w-8 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                        <img onClick={handleGitHub} className='w-8 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </div>
                    <Link to='/login'>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4 text-center">
                            Already have an account? <span className="text-orange-600 hover:underline">Login</span>
                        </div>
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Register;