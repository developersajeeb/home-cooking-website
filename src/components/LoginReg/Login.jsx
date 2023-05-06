import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { singIn, googleSingIn, githubSingIn } = useContext(AuthContext);
    const [showError, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLoginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                navigate(from)
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })
    }

    const handleGoogle = () => {
        googleSingIn()
            .then(result => {
                console.log('done');
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGitHub = () => {
        githubSingIn()
            .then(result => {
                console.log(result);
                navigate(from)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <main className='py-20 bg-gray-100 border-b-2'>
            <div className="w-full max-w-sm p-4 border bg-white border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
                <form className="space-y-6" onSubmit={handleLoginUser}>
                    <div>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to Home Cooking</h5>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@mail.com" required></input>
                        {
                            showError ? <p className='mt-2 text-red-600'>User Not Found</p> : ''
                        }
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" required></input>
                        {
                            showError ? <p className='mt-2 text-red-600'>Wrong Password</p> : ''
                        }
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-orange-300 text-orange-500"></input>
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm text-orange-500 hover:underline">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-orange-500 duration-300 hover:bg-orange-600 font-medium rounded-md text-sm px-5 py-2.5 text-center">Login to your account</button>
                    <h4 className='text-center text-lg font-semibold text-gray-700'>Sing In with</h4>
                    <div className='flex items-center gap-4 justify-center'>
                        <img onClick={handleGoogle} className='w-8 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                        <img onClick={handleGitHub} className='w-8 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </div>
                    <Link to='/register'>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4 text-center">
                            Not registered? <span className="text-orange-600 hover:underline">Create account</span>
                        </div>
                    </Link>
                </form>
            </div>
        </main>
    );
};

export default Login;