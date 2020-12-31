import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core";
import { withRouter } from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon/>
                </IconButton>
            </div>

            <div className='header__main'>
                <button onClick={() => history.push('/')}>Home</button>
                <button onClick={() => history.push('/finance')}>Finance</button>
                <button onClick={() => history.push('/calendar')}>Calendar</button>
                <button onClick={() => history.push('/fitness')}>Fitness</button>
                <button onClick={() => history.push('/sports')}>Sports</button>
            </div>
        </div>
    )
};

export default Header;
