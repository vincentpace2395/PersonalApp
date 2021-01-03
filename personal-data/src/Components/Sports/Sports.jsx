import React, {useState} from 'react';
import './Sports.css';
import {withRouter, useHistory} from 'react-router-dom';
import Fantasy from './Fantasy/Fantasy';
import League from './League/League';
import {useSelector, useDispatch} from "react-redux";
import {selectViewFantasyIsOpen, showFantasy} from "../../features/fantasySlice";

function Sports() {
    const viewFantasyIsOpen = useSelector(selectViewFantasyIsOpen);
    const dispatch = useDispatch();

    const [fantasyBtnClicked, setFantasyBtnClicked] = useState(false);
    const [leagueBtnClicked, setLeagueBtnClicked] = useState(false);

    const history = useHistory();

    function updateFantasyBtnState(path) {
        dispatch(showFantasy());
        setFantasyBtnClicked(true);
        history.push(path);
    };

    function updateLeagueBtnState(path) {
        setLeagueBtnClicked(true);
        history.push(path);
    };

    return (
        <div className='sportspage-body'>
            <button className='btn' onClick={() => updateFantasyBtnState('/sports/fantasy')}>Fantasy</button>
            <button className='btn' onClick={() => updateLeagueBtnState('/sports/league')}>League</button>
            { fantasyBtnClicked && <Fantasy /> }
            { leagueBtnClicked && <League /> }
        </div>
    )
};

export default withRouter(Sports);