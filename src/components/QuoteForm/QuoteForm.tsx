import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {CATEGORY} from "../../category";

interface Props {
    onCreate: (quote: QuoteApi) => void;
    quote?: QuoteApi;
}

const QuoteForm:React.FC<Props> = ({onCreate, quote}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const initialState = quote ? quote : {
        category: '',
        text: '',
        author: '',
    }
    const [newQuote, setNewQuote] = useState<QuoteApi>(initialState );
    const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setNewQuote(prev => ({...prev,
            [name]: value,
        }));
    };
    const onFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(newQuote);
        navigate('/');
    };

    let pageTitle = 'Add new post'

    if(id){
        pageTitle = 'Edit this post!'
    }
    const selectOption = CATEGORY.map(category => (
        <option
            key = {category.id+Math.random()}
            value={category.id}
        >{category.title}</option>
    ));

    return (
        <div className='col-6 m-5'>
            <h4>{pageTitle}</h4>

            <form onSubmit={onFormSubmit} >
                <div className="form-group">
                    <label className='Label '>
                        Category  <br/>
                        <select className='Label px-5 py-2'
                                name="category"
                                onChange={onQuoteChange}
                        >
                            <option>Выберите категорию</option>
                            {selectOption}
                        </select>
                </label><br/>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        id="author" name="author" type="text"
                        className="form-control"
                        value={newQuote.author}
                        onChange={onQuoteChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <textarea
                        id="text" name="text"
                        className="form-control"
                        value={newQuote.text}
                        onChange={onQuoteChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {id ? 'Edit' : 'Create'}
                </button>
            </form>

        </div>
    );
};

export default QuoteForm;