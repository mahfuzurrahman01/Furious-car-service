import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Header/Navbar/Footer/Footer';
import Navbar from '../../Shared/Header/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;