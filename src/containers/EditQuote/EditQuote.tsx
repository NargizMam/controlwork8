import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Spinner from "../../components/Spinner/Spinner";


const EditQuote: React.FC = () => {
    const [quote, setQuotes] = useState<QuoteApi | null>(null);
    const [loading, setLoading] = useState(false)
    const {id} = useParams();

    const fetchOneQuote = useCallback(async () => {
        try{
            setLoading(true);
            const quotesResponse = await axiosApi.get<QuoteApi>('/quotes/' + id + '.json');
            setQuotes(quotesResponse.data);
        }finally {
            setLoading(false);
        }
    }, [id]);
    useEffect(() => {
        if(id){
            fetchOneQuote().catch(console.error);
        }
    }, [id, fetchOneQuote]);

    const updateQuote = async (quote: QuoteApi) => {
        await axiosApi.put<QuoteApi>('/quotes/' + id + '.json', quote);
    }
    return (
        <div className='row mt-2'>
            {loading && <Spinner/>}
            {quote &&
            <QuoteForm onCreate={updateQuote} quote={quote}/> }
        </div>
    );
};

export default EditQuote;