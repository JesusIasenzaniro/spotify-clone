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
}));
