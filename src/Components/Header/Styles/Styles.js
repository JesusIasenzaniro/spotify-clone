import { makeStyles } from '@material-ui/core/styles';

export const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: '#000',
        padding: theme.spacing(2),
    },
    img: {
        width: '130px',
    },
}));
