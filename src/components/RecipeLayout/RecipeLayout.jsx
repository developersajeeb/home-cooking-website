import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';

const RecipeLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <main className='bg-white'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default RecipeLayout;