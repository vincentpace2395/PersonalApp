import React from 'react';
import './Fantasy.css';
import FantasyPlayerCreator from "./FantasyPlayerCreator";

class Fantasy extends React.Component {

    state = {
        addFantasyPlayerBtnClicked: false
    };

    addFantasyPlayer() {
        this.setState({
            addFantasyPlayerBtnClicked: true
        }, () => {
            console.log('Adding Fantasy Player')
        })
    }

    render() {
        return (
            <div className='fantasy-content'>
                <h3>My team</h3>
                <button className='add-player' onClick={() => this.addFantasyPlayer()}>Add Player</button>
                <div className='fantasy-body'>
                    { this.state.addFantasyPlayerBtnClicked && <FantasyPlayerCreator /> }
                </div>
                <hr />
            </div>
        )
    }
}

export default Fantasy;