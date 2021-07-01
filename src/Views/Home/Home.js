import React, { useEffect } from 'react';
import { TextField, Button, Paper, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle } from './Styles/Styles';
import { useApiContext } from '../../services/ApiContext/Api';

export const Home = () => {
    const { query, setQuery, tracks, fetchTracks } = useApiContext();
    const classes = useStyle();

    useEffect(() => {
        console.log('Tracks updated');
    }, [tracks]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    return (
        <main>
            <article className={classes.inputContainer}>
                <TextField placeholder='search...' value={query} onChange={handleChange} variant='outlined' className={classes.input} />
                <Button onClick={() => fetchTracks()} startIcon={<SearchIcon />} size='large' className={classes.button}>
                    Search
                </Button>
            </article>

            <section>
                <article>
                    {tracks.items && (
                        <Grid container justify='center' className={classes.cardContainer}>
                            {tracks.items.map((item, index) => {
                                return (
                                    <Paper key={index} className={classes.card}>
                                        {item.name}
                                    </Paper>
                                );
                            })}
                        </Grid>
                    )}
                </article>
            </section>
        </main>
    );
};
