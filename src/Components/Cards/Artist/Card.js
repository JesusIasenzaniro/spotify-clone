import React from 'react';
import { Paper } from '@material-ui/core';
import { useStyle } from '../Styles/Styles';

const Card = ({ item, index }) => {
    const classes = useStyle();
    return (
        <main>
            <Paper key={item.id} className={classes.card}>
                <article className={classes.imgContainer}>
                    <img className={classes.img} src={item.images[0].url} alt='' key={index}></img>
                </article>
                <article className={classes.cardTitle}>
                    <h3>{item.name}</h3>
                </article>
            </Paper>
        </main>
    );
};

export default Card;
