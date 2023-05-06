import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-white">
            <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">404</h1>
            <div className="bg-orange-500 text-white px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <Link to="/">
                    <span className="relative block px-8 py-3 bg-white border-2 border-orange-500 rounded-md hover:border-orange-500 hover:bg-orange-500 hover:text-white duration-300 text-orange-500 font-semibold">
                        Go Home
                    </span>
                </Link>

            </button>
        </main>
    );
};

export default ErrorPage;