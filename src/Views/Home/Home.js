import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle } from './Styles/Styles';

export const Home = () => {
    const [query, setQuery] = useState('');
    const classes = useStyle();

    const handleChange = (e) => {
        setQuery(e.target.value);
        console.log(query);
    };
    return (
        <main>
            <article className={classes.inputContainer}>
                <TextField value={query} onChange={handleChange} variant='outlined' className={classes.input} />
                <Button startIcon={React.cloneElement(<SearchIcon />)} size='large' className={classes.button}>
                    Search
                </Button>
            </article>
            {query}
        </main>
    );
};
