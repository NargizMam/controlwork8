import React from 'react';
import Toolbar from "../../components/Toolbar/Toolbar";
import {Outlet, useLocation} from "react-router-dom";
import QuotesList from "../QuotesList/QuotesList";

const Home = () => {
    const location = useLocation();
    let leftDiv = (
        <QuotesList/>
    )
    if(location.pathname === '/'){
        <Outlet/>
    }
    return (
        <div className='d-flex m-5'>
            <div className='col-3'>
                <Toolbar/>
            </div>
            <div className='col-7'>
                {leftDiv}
            </div>

        </div>

    );
};

export default Home;
