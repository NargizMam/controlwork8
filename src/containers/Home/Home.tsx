import React from 'react';
import Toolbar from "../../components/Toolbar/Toolbar";
import QuotesList from "../QuotesList/QuotesList";

const Home = () => {



    return (
        <div className='d-flex m-5'>
            <div className='col-3'>
                <Toolbar/>
            </div>
            <div className='col-7'>
                <QuotesList/>
            </div>

        </div>

    );
};

export default Home;
