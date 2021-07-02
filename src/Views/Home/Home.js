import React from 'react';
import { TextField, Button, Paper, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle } from './Styles/Styles';
import { useApiContext } from '../../services/ApiContext/Api';

export const Home = () => {
    const { query, setQuery, tracks, fetchTracks } = useApiContext();
    const classes = useStyle();

    // useEffect(() => {
    //     console.log('Tracks updated');
    // }, [tracks]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    return (
        <main>
            <form onSubmit={(e) => fetchTracks(e)} className={classes.inputContainer}>
                <TextField placeholder='search...' value={query} onChange={handleChange} variant='outlined' className={classes.input} />
                <Button type='submit' startIcon={<SearchIcon />} size='large' className={classes.button}>
                    Search
                </Button>
            </form>

            {tracks.total && (
                <section className={classes.resultsContainer}>
                    <Paper className={classes.card}>Results: {tracks.total}</Paper>
                </section>
            )}
            <section>
                <article>
                    {tracks.items && (
                        <Grid container justify='center' className={classes.cardContainer}>
                            {tracks.items.map((item, index) => {
                                return (
                                    <Paper key={item.id} className={classes.card}>
                                        <article className={classes.cardTitle}>{item.name}</article>
                                        <article className={classes.imgContainer}>
                                            <img className={classes.img} src={item.album.images[1].url} alt='' key={index}></img>
                                        </article>
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
