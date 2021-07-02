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
            {data.artists && (
                <section className={classes.resultsContainer}>
                    <Paper className={classes.resultsCard}>Artists results: {data.artists.total}</Paper>
                </section>
            )}

            <section>
                <article className={classes.root}>
                    {data.artists && (
                        <Grid container justify='center' className={classes.cardContainer}>
                            {data.artists.items.map((item, index) => {
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
