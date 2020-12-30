import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core";
// import { withRouter } from 'react-router-dom';
// import history from '../../history';

class Header extends React.Component {

    // changeRoute = path => {
    //     this.props.history.push(path);
    // };

    render() {
        return (
            <div className='header'>
                <div className='header__left'>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                </div>

                <div className='header__main'>
                    <button>Home</button>
                    <button>Finance</button>
                    <button>Calendar</button>
                    <button>Lifting</button>
                    <button>Sports</button>
                </div>





                {/*<button onClick={() => this.changeRoute('/')}>Home</button>*/}
                {/*<button onClick={() => this.changeRoute('/finance')}>Finance</button>*/}
                {/*<button onClick={() => this.changeRoute('/calendar')}>Calendar</button>*/}
                {/*<button onClick={() => this.changeRoute('/lifting')}>Gym</button>*/}
                {/*<button onClick={() => this.changeRoute('/sports')}>Sports</button>*/}



            </div>
        )
    }
};

export default Header;
