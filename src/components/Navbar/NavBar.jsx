import React, { useContext, useState } from 'react';
import logo from '../../assets/Chef Hat Logo - Made with PosterMyWall.png';
import { Spin as Hamburger } from 'hamburger-react'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import logOutIcon from '../../assets/logouticon.png'
import { Tooltip } from 'react-tooltip'

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 md:p-1">
                <Link className='flex items-center' to='/'>
                    <img src={logo} className="w-12 mr-2" alt="Logo" />
                    <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Home Cooking</h1>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center ml-3 text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setOpen(!isOpen) }}>
                    <Hamburger size={25}></Hamburger>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex items-center p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to='/recipe' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                            <li>Recipe</li>
                        </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                            <li>Blog</li>
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                            <li>About</li>
                        </NavLink>
                        {
                            user ?
                                <>
                                    <a data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user.displayName}
                                        data-tooltip-place="bottom">
                                        <img className='w-10 h-10 object-cover rounded-full cursor-pointer' src={user?.photoURL} alt="User" />
                                        <Tooltip className='absolute bg-white border p-2 z-50 rounded-md' id="my-tooltip" />
                                    </a>

                                    <button onClick={handleLogOut} className='border-2 p-2 rounded-md'><img className='w-6' src={logOutIcon} alt="" /></button>
                                </>
                                :
                                <NavLink to='/login'>
                                    <li className='text-gray-800 bg-transparent border border-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white duration-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2'>Login</li>
                                </NavLink>
                        }
                    </ul>
                </div>
                <ul className={`font-medium p-4 pt-3 grid gap-3 w-32 border text-center border-gray-300 rounded-lg bg-gray-50 md:hidden absolute duration-500 z-50 ${isOpen ? 'right-2 top-20' : 'hidden'}`}>
                    <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='/recipe' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>Recipe</li>
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>Blog</li>
                    </NavLink>
                    <NavLink to='/about' className={({ isActive }) => isActive ? 'text-orange-400 font-medium' : 'text-gray-800'}>
                        <li>About</li>
                    </NavLink>
                    {
                        user ? <>
                            <a data-tooltip-id="my-tooltip"
                                data-tooltip-content={user.displayName}
                                data-tooltip-place="bottom">
                                <img className='w-10 h-10 object-cover rounded-full cursor-pointer' src={user?.photoURL} alt="User" />
                                <Tooltip className='absolute bg-white border p-2 z-50 rounded-md' id="my-tooltip" />
                            </a>
                            <button className='border-2 p-2 rounded-md'><img className='w-6 mx-auto' src={logOutIcon} alt="" /></button>
                        </>
                            :
                            <NavLink to='/login'>
                                <li className='text-gray-800 bg-transparent border border-gray-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white duration-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2'>Login</li>
                            </NavLink>
                    }
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;