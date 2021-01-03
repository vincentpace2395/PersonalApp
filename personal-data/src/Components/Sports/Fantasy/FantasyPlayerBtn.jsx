import React from 'react';
import './Fantasy.css';
import {db} from "../../../utils/firebase";

class FantasyPlayerBtn extends React.Component {

    state = {
        saveBtnClicked: false
    };

    savePlayer = () => {
        db.collection('fantasy-players').add({

        });
        this.props.status = true;
        console.log('Player saved')
    };

    render() {
        return (
            <span>

            </span>
        )
    }
}

export default FantasyPlayerBtn;