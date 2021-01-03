import React from 'react';
import './Fantasy.css';
import FantasyPlayerBtn from "./FantasyPlayerBtn";
import {db} from '../../../utils/firebase';

class FantasyPlayerCreator extends React.Component {

    state = {
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
        toDirty: false,
        saveBtnClicked: false,
        deleteBtnClicked: false
    };

    savePlayer = () => {
        db.collection('fantasy-players').add({

        });
        this.setState({
            saveBtnClicked: true
        }, () => {
            console.log('Player saved')
        })
    };

    render() {
        return (
            <React.Fragment>
                <input placeholder='Name' className='fantasy-player-input fantasy-player-name' />
                <input placeholder='# Games' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='FGA' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='FGM' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='FTA' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='FTM' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='3PM' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='PTS' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='REB' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='AST' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='STL' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='BLK' className='fantasy-player-input fantasy-player-stats' />
                <input placeholder='TO' className='fantasy-player-input fantasy-player-stats' />
                { !this.state.saveBtnClicked && <button className='save-btn' onClick={() => this.savePlayer()}>Save</button> }
                { !this.state.saveBtnClicked && <button className='delete-btn' onClick={() => this.deletePlayer()}>Delete</button> }
                { this.state.saveBtnClicked && <p4>Player saved</p4> }
            </React.Fragment>
        )
    }
}

export default FantasyPlayerCreator;