import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { useStyle } from '../Styles/Styles';
import { useApiContext } from '../../../services/ApiContext/Api';
import Card from './Card';

const CardContainer = () => {
    const { data } = useApiContext();
    const classes = useStyle();
    return (
        <main>
            {data.tracks && (
                <section className={classes.resultsContainer}>
                    <Paper className={classes.resultsCard}>Tracks results: {data.tracks.total}</Paper>
                </section>
            )}

            <section>
                <article>
                    {data.tracks && (
                        <Grid container justify='center' className={classes.cardContainer}>
                            {data.tracks.items.map((item, index) => {
                                return <Card key={item.id} item={item} index={index} />;
                            })}
                        </Grid>
                    )}
                </article>
            </section>
        </main>
    );
};

export default CardContainer;
