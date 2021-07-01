import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyle } from './Styles/Styles';
import axios from 'axios';

export const Home = () => {
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);
    const classes = useStyle();

    const url = `https://api.spotify.com/v1/search?q=`;
    const token = 'BQBpC5uXKxktX5Y43g0i3czCI3_cNJUFj4jT_aR7IvFlVI4z6cSG6I18GABycLGN85aZkjfuxfnFo3OegvqxMODmxCRJMxPug0l3pVIKy-38sJJqU20HdlVU6LAO_jE70yjPBla8TiSOUzVi8_hR1nJEhUjt2rI';
    const type = 'track';

    const fetchTracks = async () => {
        try {
            const response = await axios.get(`${url}${query}&type=${type}`, {
                headers: { Authorization: 'Bearer ' + token },
            });
            console.log(response);
            setTracks(response.data.tracks);
        } catch (e) {
            console.log(e);
            alert('Track not found');
        }
    };

    useEffect(() => {
        console.log('Query updated');
    }, [query]);

    const handleChange = (e) => {
        setQuery(e.target.value);
        console.log(query);
    };
    return (
        <main>
            <article className={classes.inputContainer}>
                <TextField value={query} onChange={handleChange} variant='outlined' className={classes.input} />
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
