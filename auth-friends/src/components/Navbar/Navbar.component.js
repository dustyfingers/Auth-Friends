import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    navList: {
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none'
    },
    navListItem: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <ul className={classes.navList}>
                        <li>
                            <Link className={classes.navListItem} to="/api/login">Login</Link>
                        </li>
                        <li>
                            <Link className={classes.navListItem} to="/api/friends">Friends</Link>
                        </li>
                        <li>
                            <Link className={classes.navListItem} to="/api/create-friend">Create Friend</Link>
                        </li>
                    </ul>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Auth "Friends"
                    </Typography>
                </Toolbar>
            </AppBar>
        </div >
    );
}


export default Navbar 