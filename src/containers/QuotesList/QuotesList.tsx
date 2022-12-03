import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import OneQuote from "./OneQuote/OneQuote";
import Spinner from "../../components/Spinner/Spinner";
import {useLocation, useParams} from "react-router-dom";

const QuotesList = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const location = useLocation();
    let url = `/quotes.json?orderBy="category"&equalTo="${id}"`;

    const fetchQuotes =useCallback(async () => {
        try{
            setLoading(true);
            let quotesResponse =await axiosApi.get<QuotesList>('/quotes.json');
            let newQuotes: Quote[] = [];
            if(id){
                quotesResponse =await axiosApi.get<QuotesList>(url);

            }
            Object.keys(quotesResponse.data).map(key => {
                if(quotesResponse.data[key]) {
                    const quote = quotesResponse.data[key];
                    quote.id = key;
                    return newQuotes.push(quote);
                }
            })
            setQuotes(newQuotes);
        }finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if(location.pathname === '/'){

        }
        void fetchQuotes().catch(console.error);
    }, [location]);

    const oneQuote = quotes.map(quote => (
        <OneQuote key={quote.id}
                  quote={quote}
        />
    ));

    return (
        <>
            <h4>
                {id ? `Все цитаты категории ${id}` : 'All QUOTES'}
            </h4>

            {loading ? <Spinner/> : null}
            {oneQuote}
        </>
    );
};

export default QuotesList;