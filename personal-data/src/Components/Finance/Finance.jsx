import React from 'react';
import './Finance.css';
import {withRouter, useHistory} from 'react-router-dom';
import {showFantasy} from "../../features/fantasySlice";

function Finance() {

    const history = useHistory();

    function updateOverviewBtnState(path) {
        dispatch(showFantasy());
        setFantasyBtnClicked(true);
        history.push(path);
    };

    function updateDebtBtnState(path) {
        setLeagueBtnClicked(true);
        history.push(path);
    };

    function updateInvestmentsBtnState(path) {
        dispatch(showFantasy());
        setFantasyBtnClicked(true);
        history.push(path);
    };

    return (
        <div className='financepage-body'>
            <button className='btn' onClick={() => updateOverviewBtnState('/finance/fantasy')}>Overview</button>
            <button className='btn' onClick={() => updateDebtBtnState('/finance/league')}>Debts</button>
            <button className='btn' onClick={() => updateInvestmentsBtnState('/finance/league')}>Investments</button>
        </div>
    )
}

export default withRouter(Finance);