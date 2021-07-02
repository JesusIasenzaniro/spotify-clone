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

    // resultsCard: {
    //     color: '#fff',
    //     backgroundColor: '#000',
    //     padding: theme.spacing(2),
    //     marginTop: theme.spacing(3),
    //     height: 'fit-content',
    //     width: '300px',
    // },

    cardContainer: {
        marginTop: theme.spacing(3),
    },
    card: {
        backgroundColor: '#000',
        color: '#fff',
        fontWeight: 'bold',
        padding: theme.spacing(2),
        margin: theme.spacing(1, 1, 1, 1),
        height: 'fit-content',
        width: '300px',
    },
    cardTitle: {
        textAlign: 'center',
    },
    imgContainer: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    img: {
        width: '250px',
    },
}));
