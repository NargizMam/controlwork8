import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import QuotesList from "./containers/QuotesList/QuotesList";
import NewQuote from "./containers/NewQuote/NewQuote";
import EditQuote from "./containers/EditQuote/EditQuote";

const App = () => (
    <>
        <header>
            <Navbar/>
        </header>
        <main className="container">
            <Routes>
                <Route path='/' element={(
                    <Home/>
                )}/>
                <Route path='/quotes' element={(
                    <Home/>
                )}/>
                <Route path='quotes/:id/edit/' element={(
                    <EditQuote />
                )}/>
                <Route path='/add-quote' element={(
                    <NewQuote/>
                )}/>
                <Route path='quotes/:id' element={(
                    <QuotesList/>
                )}/>
            </Routes>
        </main>
    </>
);

export default App;
