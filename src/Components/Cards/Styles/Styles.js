import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
    },
    input: {
        width: '40%',
    },
    button: {
        color: '#fff',
        backgroundColor: '#000',
        '&:hover': {
            backgroundColor: '#1DB954',
        },
    },

    resultsContainer: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(3),
    },
    resultsCard: {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        padding: theme.spacing(2),
        margin: theme.spacing(1, 1, 1, 1),
    },
    cardContainer: {
        display: 'flex',
        marginTop: theme.spacing(3),
    },

    card: {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        padding: theme.spacing(2),
        margin: theme.spacing(1, 1, 1, 1),
        height: '350px',
        width: '300px',
    },
    cardTitle: {
        textAlign: 'center',
    },
    imgContainer: {
        height: '250px',
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    img: {
        width: '95%',
        height: '100%',
    },
}));
