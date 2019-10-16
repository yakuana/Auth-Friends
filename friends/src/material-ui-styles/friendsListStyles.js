import { makeStyles } from '@material-ui/core/styles';

export const friendListStyles = makeStyles(theme => ({
    button: {
        width: 200, 
        height: 48,
        fontSize: 23,
        background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        margin: '0 auto',
    },
    list: {
        width: theme.spacing(150),
        margin: '20px auto 0 auto',
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        borderRadius: '40px',
    },
}));