import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle } from './Styles/Styles';
import { useApiContext } from '../../services/ApiContext/Api';
import Artists from '../../Components/Cards/Artist/CardContainer';
import Tracks from '../../Components/Cards/Track/CardContainer';
import Albums from '../../Components/Cards/Album/CardContainer';
export const Home = () => {
    const { query, setQuery, fetchData } = useApiContext();
    const classes = useStyle();

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <main>
            <form onSubmit={(e) => fetchData(e)} className={classes.inputContainer}>
                <TextField placeholder='search...' value={query} onChange={handleChange} variant='outlined' className={classes.input} />
                <Button type='submit' startIcon={<SearchIcon />} size='large' className={classes.button}>
                    Search
                </Button>
            </form>
            <Artists />
            <Tracks />
            <Albums />
        </main>
    );
};
