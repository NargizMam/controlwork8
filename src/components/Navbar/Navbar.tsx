import React from 'react';
import {NavLink} from "react-router-dom";
import {Grid} from "@mui/material";

const Header = () => {
    return (
        <div className='navbar bg-success p-2 text-dark bg-opacity-25 p-3 '>
            <div className='container px-5 '>
                <NavLink to="/" className='text-success'>
                    <h4>QUOTES CENTRAL</h4>
                </NavLink>
                <Grid>
                    <NavLink to="/quotes" className='btn btn-outline-success'>Quotes </NavLink>
                    <NavLink to="/add-quote" className='btn btn-outline-success'>Submit new quotes</NavLink>
                </Grid>
            </div>
        </div>
    );
};

export default Header;