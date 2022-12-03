import React from 'react';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import axiosApi from "../../../axiosApi";
import {NavLink, useNavigate} from "react-router-dom";

interface Props {
    quote: Quote;
}

const OneQuote: React.FC<Props> = ({quote}) => {
    const navigate = useNavigate();
    const onDelete = async () => {
        await axiosApi.delete<Quote>('/quotes/' + quote.id + '.json');
        navigate('/');
    }
    return (
        <Card sx={{ width: 550, margin: 5}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {quote.category}
                </Typography>
                <Typography variant="h5" component="div">
                    {quote.text}
                </Typography>
                <Typography variant="h5" component="div">
                    {quote.author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button>
                    <NavLink to={'/quotes/'+quote.id+'/edit'}>Edit</NavLink>
                </Button>
                <Button onClick={onDelete}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export default OneQuote;