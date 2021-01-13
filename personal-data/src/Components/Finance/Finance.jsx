import React, { useState } from 'react';
import './Finance.css';
import Portfolio from './Portfolio/Portfolio';
import Debts from './Debts/Debts';
import Investments from './Investments/Investments';
import { withRouter, useHistory } from 'react-router-dom';
import { selectViewFinanceIsOpen, showFinance } from "../../features/financeSlice";
import { selectViewDebtIsOpen, showDebt } from "../../features/debtSlice";
import { selectViewInvestmentIsOpen, showInvestment } from "../../features/investmentSlice";
import { useSelector, useDispatch } from "react-redux";


function Finance() {
    const viewFinanceIsOpen = useSelector(selectViewFinanceIsOpen);
    const viewDebtIsOpen = useSelector(selectViewDebtIsOpen);
    const viewInvestmentIsOpen = useSelector(selectViewInvestmentIsOpen);
    const dispatch = useDispatch();
    const history = useHistory();

    const [financeBtnClicked, setFinanceBtnClicked] = useState(false);
    const [investmentBtnClicked, setInvestmentBtnClicked] = useState(false);
    const [debtBtnClicked, setDebtBtnClicked] = useState(false);


    function updatePortfolioBtnState(path) {
        // dispatch(showFantasy());
        setFinanceBtnClicked(true);
        console.log(financeBtnClicked);
        history.push(path);
    };

    function updateDebtBtnState(path) {
        setDebtBtnClicked(true);
        history.push(path);
    };

    function updateInvestmentsBtnState(path) {
        // dispatch(showFantasy());
        setInvestmentBtnClicked(true);
        history.push(path);
    };

    return (
        <div className='financepage-body'>
            { financeBtnClicked && <Portfolio /> }
            { debtBtnClicked && <Debts /> }
            { investmentBtnClicked && <Investments /> }
            <button className='btn' onClick={() => updatePortfolioBtnState('/finance/portfolio')}>Portfolio</button>
            <button className='btn' onClick={() => updateDebtBtnState('/finance/debts')}>Debts</button>
            <button className='btn' onClick={() => updateInvestmentsBtnState('/finance/investments')}>Investments</button>
        </div>
    )
}

export default withRouter(Finance);