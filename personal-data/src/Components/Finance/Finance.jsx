import React, {useState} from 'react';
import './Finance.css';
import {withRouter, useHistory} from 'react-router-dom';
import { selectViewFinanceIsOpen, showFinance } from "../../features/financeSlice";
import { selectViewDebtIsOpen, showDebt } from "../../features/debtSlice";
import { selectViewInvestmentIsOpen, showInvestment } from "../../features/investmentSlice";
import {useSelector} from "react-redux";


function Finance() {
    const viewFinanceIsOpen = useSelector(selectViewFinanceIsOpen);
    const viewDebtIsOpen = useSelector(selectViewDebtIsOpen);
    const viewInvestmentIsOpen = useSelector(selectViewInvestmentIsOpen);
    const dispatch = useDispatch();
    const history = useHistory();

    const [financeBtnClicked, setFinanceBtnClicked] = useState(false);
    const [investmentBtnClicked, setInvestmentBtnClicked] = useState(false);
    const [debtBtnClicked, setDebtBtnClicked] = useState(false);


    function updateOverviewBtnState(path) {
        dispatch(showFantasy());
        setFinanceBtnClicked(true);
        history.push(path);
    };

    function updateDebtBtnState(path) {
        setDebtBtnClicked(true);
        history.push(path);
    };

    function updateInvestmentsBtnState(path) {
        dispatch(showFantasy());
        setInvestmentBtnClicked(true);
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