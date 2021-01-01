import React, {useState} from 'react';
import './Sports.css';
import {withRouter, useHistory} from 'react-router-dom';
import Fantasy from './Fantasy/Fantasy';
import Finance from "../Finance/Finance";


function changeRoute(path) {
    this.setState({
        fantasyBtnClicked: true
    }, () => {
        history.push(path);
    });
};

const  Sports = () => {

    const [fantasyBtnClicked, setFantasyBtnClicked] = false;
    const [leagueBtnClicked, setLeagueBtnClicked] = false;

    const history = useHistory();

    return (
        <div className='sportspage-body'>
            <button className='fantasy-btn' onClick={() => this.changeRoute('/sports/fantasy')}>Fantasy</button>
            { this.state.fantasyBtnClicked ? <Fantasy /> : null }

            Sports Page
        </div>
    )
};

export default withRouter(Sports);