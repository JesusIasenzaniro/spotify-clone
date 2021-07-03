import { Paper, Grid } from '@material-ui/core';
import { useStyle } from '../Styles/Styles';
import { useApiContext } from '../../../services/ApiContext/Api';
import { Link } from 'react-router-dom';
import Card from './Card';

const CardContainer = () => {
    const { data } = useApiContext();
    const classes = useStyle();

    return (
        <main>
            {data.albums && (
                <section className={classes.resultsContainer}>
                    <Paper className={classes.resultsCard}>Albums results: {data.artists.total}</Paper>
                </section>
            )}

            <section>
                <article>
                    {data.albums && (
                        <Grid container justify='center' className={classes.cardContainer}>
                            {data.albums.items.map((item, index) => {
                                return (
                                    <article key={item.id}>
                                        <Link to={`/${item.id}`}>
                                            <Card item={item} index={index} />
                                        </Link>
                                    </article>
                                );
                            })}
                        </Grid>
                    )}
                </article>
            </section>
        </main>
    );
};

export default CardContainer;
