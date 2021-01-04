import React from 'react';
import './Fantasy.css';
import DeleteFantasyPlayerModal from '../../Modals/DeleteFantasyPlayerModal';
import FantasyTeamTable from './FantasyTeam/FantasyTeamTable';
import {db} from "../../../utils/firebase";

class Fantasy extends React.Component {
    successMessage = 'Player successfully added';
    state = {
        addPlayerBtnClicked: false,
        deleteBtnClicked: false,
        saveBtnClicked: false,
        myPlayer: false,
        opposingPlayer: false,
        nameDirty: false,
        numGamesDirty: false,
        fgmDirty: false,
        fgaDirty: false,
        ftmDirty: false,
        ftaDirty: false,
        threesDirty: false,
        ptsDirty: false,
        rebDirty: false,
        astDirty: false,
        stlDirty: false,
        blkDirty: false,
        toDirty: false
    };

    savePlayer = () => {
        db.collection('fantasy-players').add({

        });
        this.setState({
            saveBtnClicked: true,
            addPlayerBtnClicked: false,
            myPlayer: false,
            opposingPlayer: false
        }, () => {
            console.log('Player saved')
        })
    };

    deletePlayer = () => {
        db.collection('fantasy-players')

        this.setState( {
            deleteBtnClicked: true
        }, () => {
            console.log('Player delete action triggered')
        })
    };

    addMyFantasyPlayer() {
        this.setState({
            addPlayerBtnClicked: true,
            myPlayer: true
        }, () => {
            console.log('My player added');
        })
    }

    addOpposingFantasyPlayer() {
        this.setState({
            addPlayerBtnClicked: true,
            opposingPlayer: true
        }, () => {
            console.log('Opposing player added');
        })
    }

    render() {
        return (
            <div className='fantasy-content'>
                <h3>Yahoo Fantasy</h3>
                <button
                    className='add-player'
                    onClick={() => this.addMyFantasyPlayer()}
                    disabled={this.state.addPlayerBtnClicked}>Add My Team Player</button>
                <button
                    className='add-player'
                    onClick={() => this.addOpposingFantasyPlayer()}
                    disabled={this.state.addPlayerBtnClicked}>Add Opposing TeamPlayer</button>
                <div className='fantasy-body'>
                    { this.state.addPlayerBtnClicked && <input placeholder='Name' className='fantasy-player-input fantasy-player-name' /> }
                    { (this.state.addPlayerBtnClicked && this.state.myPlayer) && <input disabled value='1' className='fantasy-player-team fantasy-player-stats' /> }
                    { (this.state.addPlayerBtnClicked && this.state.opposingPlayer) && <input disabled value='2' className='fantasy-player-team fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='# Games' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='FGA' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='FGM' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='FTA' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='FTM' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='3PM' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='PTS' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='REB' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='AST' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='STL' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='BLK' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <input placeholder='TO' className='fantasy-player-input fantasy-player-stats' /> }
                    { this.state.addPlayerBtnClicked && <button className='save-btn' onClick={() => this.savePlayer()}>Save</button> }
                    { this.state.addPlayerBtnClicked && <button className='delete-btn' onClick={() => this.deletePlayer()}>Delete</button> }
                    { (!this.state.addPlayerBtnClicked && this.state.saveBtnClicked) && <p4>{this.successMessage}</p4> }
                    { this.state.deleteBtnClicked && <DeleteFantasyPlayerModal /> }
                </div>
                <hr />
                <h3>Fantasy Team Tables</h3>
                <FantasyTeamTable />
            </div>
        )
    }
}

export default Fantasy;