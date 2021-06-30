import React from 'react';
import { useStyle } from './Styles/Styles';
import logo from '../../assets/logo.png';
const Header = () => {
    const classes = useStyle();
    return (
        <main className={classes.root}>
            <img className={classes.img} src={logo} alt='logo' />
        </main>
    );
};

export default Header;
