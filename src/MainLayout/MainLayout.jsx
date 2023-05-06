import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
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

export default MainLayout;