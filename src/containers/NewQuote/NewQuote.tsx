import React from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";



const NewQuote: React.FC = () => {
    const navigate = useNavigate();
    const addQuote =async (newQuote: QuoteApi) => {
        await axiosApi.post('/quotes.json', newQuote);
        navigate('/');
    };

    return (
        <div>
            <QuoteForm onCreate={(newQuote) => addQuote(newQuote)}/>
        </div>
    );
};

export default NewQuote;