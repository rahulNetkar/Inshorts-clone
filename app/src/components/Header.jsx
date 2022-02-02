import { AppBar, Box, Toolbar, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
    header: {
        background: '#fff',
        height: 72
    },
    logo: {
        height: 54,
        margin: 'auto',
        paddingRight: 70
    },
    menu: {
        color: '#000'
    }
})

const Header = () => {

    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return (
        <Box>
            <AppBar className={classes.header} >
                <Toolbar>
                    <Menu className={classes.menu} />
                    <img src={url} alt='logo' className={classes.logo} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
