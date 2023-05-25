import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Root = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    console.log(location)
    return (
        <div>
            {
                noHeaderFooter || <Header />
            }
            <Outlet />
            {
                noHeaderFooter || <Footer />
            }
        </div>
    );
};

export default Root;