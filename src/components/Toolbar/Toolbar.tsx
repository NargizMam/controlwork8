import React from 'react';
import {CATEGORY} from "../../category";
import {NavLink} from "react-router-dom";

const Toolbar = () => {
    const categories = CATEGORY.map(category => (
        <div key = {category.title+Math.random()}>
            <NavLink to={`/quotes/${category.id}`}
                     className='btn btn-outline-success px-5 m-2'
                     style={{width: 200}}
            >{category.title}</NavLink>
        </div>
    ));
    return (
        <div className='Navbar' >
            <NavLink to="/"
                     className='btn btn-outline-success px-5 m-2'
                     style={{width: 200}}
            >All</NavLink>
            {categories}
        </div>
    );
};

export default Toolbar;