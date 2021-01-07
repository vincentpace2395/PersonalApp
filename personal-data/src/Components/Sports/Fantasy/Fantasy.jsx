import React from 'react';
import './Fantasy.css';
import FantasyModal from '../../Modals/FantasyModal';
import FantasyTeamTable from './FantasyTeam/FantasyTeamTable';
import {db} from "../../../utils/firebase";

class Fantasy extends React.Component {
    successMessage = 'Player successfully added';
    deleteModalWarningMessage = 'Are you sure you want to delete player?';
    dangerBtnText = 'Delete';
    primaryBtnText = 'Cancel';

    state = {
        addPlayerBtnClicked: false,
        deleteBtnClicked: false,
        saveBtnClicked: false,
        myPlayer: false,
        opposingPlayer: false,
        allFieldsDirty: false,
        // nameDirty: false,
        // numGamesDirty: false,
        // fgmDirty: false,
        // fgaDirty: false,
        // ftmDirty: false,
        // ftaDirty: false,
        // threesDirty: false,
        // ptsDirty: false,
        // rebDirty: false,
        // astDirty: false,
        // stlDirty: false,
        // blkDirty: false,
        // toDirty: false,
        name: null,
        numGames: null,
        fgm: null,
        fga: null,
        ftm: null,
        fta: null,
        threes: null,
        pts: null,
        reb: null,
        ast: null,
        stl: null,
        blk: null,
        turnover: null
    };

    savePlayer = () => {
        // db.collection('fantasy-players').add({
        //     player: this.formData.name,
        //     team: this.formData.team,
        //     games: this.formData.numGames,
        //     fga: this.formData.fga,
        //     fgm: this.formData.fgm,
        //     fta: this.formData.fta,
        //     ftm: this.formData.ftm,
        //     three: this.formData.three,
        //     pts: this.formData.pts,
        //     reb: this.formData.reb,
        //     ast: this.formData.ast,
        //     stl: this.formData.stl,
        //     blk: this.formData.blk,
        //     to: this.formData.to
        // });

        this.setState({
            saveBtnClicked: true,
            addPlayerBtnClicked: false,
            myPlayer: false,
            opposingPlayer: false,
            allFieldsDirty: false,
            name: null,
            numGames: null,
            fgm: null,
            fga: null,
            ftm: null,
            fta: null,
            threes: null,
            pts: null,
            reb: null,
            ast: null,
            stl: null,
            blk: null,
            turnover: null

        }, () => {
            console.log('Player saved');
            console.log('Name: ' + this.state.name);
            console.log('Num Games: ' + this.state.numGames);
            console.log('3s: ' + this.state.threes);
            console.log('Points: ' + this.state.pts);
            console.log('Rebounds: ' + this.state.reb);
            console.log('Assists: ' + this.state.ast);
            console.log('Steals: ' + this.state.stl);
            console.log('Blocks: ' + this.state.blk);
            console.log('Turnovers: ' + this.state.turnover);
            console.log('FGM: ' + this.state.fgm);
            console.log('FGA: ' + this.state.fga);
            console.log('FTM: ' + this.state.ftm);
            console.log('FTA: ' + this.state.fta);
        })
    };

    deletePlayer = () => {
        // db.collection('fantasy-players')
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

    closeModalHandler = () => {
        this.setState({
            deleteBtnClicked: false
        }, () => {
            console.log('Closing Modal');
        })
    };

    deletePlayerHandler = () => {
        this.setState({
            deleteBtnClicked: false,
            addPlayerBtnClicked: false
        }, () => {
            console.log('Player successfully deleted');
        })
    };

    onChangeName = event => {
        this.setState({
            name: event.target.value
        })
    };

    onChangeNumGames = event => {
        this.setState({
            numGames: event.target.value
        })
    };

    onChangeFgm = event => {
        this.setState({
            fgm: event.target.value
        })
    };

    onChangeFga = event => {
        this.setState({
            fga: event.target.value
        })
    };

    onChangeFtm = event => {
        this.setState({
            ftm: event.target.value
        })
    };

    onChangeFta = event => {
        this.setState({
            fta: event.target.value
        })
    };

    onChangeThree = event => {
        this.setState({
            threes: event.target.value
        })
    };

    onChangePts = event => {
        this.setState({
            pts: event.target.value
        })
    };

    onChangeReb = event => {
        this.setState({
            reb: event.target.value
        })
    };

    onChangeAst = event => {
        this.setState({
            ast: event.target.value
        })
    };

    onChangeStl = event => {
        this.setState({
            stl: event.target.value
        })
    };

    onChangeBlk = event => {
        this.setState({
            blk: event.target.value
        })
    };

    onChangeTurnover = event => {
        this.setState({
            turnover: event.target.value

        })
    };

    setAllFieldsDirtyState = () => {
        this.setState({
            allFieldsDirty: true
        })
    };

    checkAllFieldsDirty = () => {
        if (this.state.name !== null && this.state.numGames !== null && this.state.threes !== null && this.state.pts !== null &&
            this.state.reb !== null && this.state.ast !== null && this.state.stl !== null && this.state.blk !== null &&
            this.state.turnover !== null && this.state.fgm !== null && this.state.fga !== null && this.state.ftm !== null && this.state.fta !== null) {
            return true;
        }
        return false;
    };

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
                    <form>
                        { this.checkAllFieldsDirty() && this.setAllFieldsDirtyState() }
                        { this.state.addPlayerBtnClicked && <input placeholder='Name' className='fantasy-player-input fantasy-player-name' onChange={event => this.onChangeName(event)} /> }
                        { (this.state.addPlayerBtnClicked && this.state.myPlayer) && <input disabled value='1' className='fantasy-player-team fantasy-player-stats' /> }
                        { (this.state.addPlayerBtnClicked && this.state.opposingPlayer) && <input disabled value='2' className='fantasy-player-team fantasy-player-stats' /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='# Games' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeNumGames(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='FGA' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeFga(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='FGM' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeFgm(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='FTA' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeFta(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='FTM' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeFtm(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='3PM' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeThree(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='PTS' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangePts(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='REB' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeReb(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='AST' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeAst(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='STL' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeStl(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='BLK' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeBlk(event)} /> }
                        { this.state.addPlayerBtnClicked && <input placeholder='TO' className='fantasy-player-input fantasy-player-stats' onChange={event => this.onChangeTurnover(event)} /> }
                        { this.state.addPlayerBtnClicked && <button className='save-btn' disabled={!this.state.allFieldsDirty} onClick={() => this.savePlayer()}>Save</button> }
                        { this.state.addPlayerBtnClicked && <button className='delete-btn' onClick={() => this.deletePlayer()}>Delete</button> }
                        { (!this.state.addPlayerBtnClicked && this.state.saveBtnClicked) && <p4>{this.successMessage}</p4> }
                        { this.state.deleteBtnClicked &&
                        <FantasyModal
                            show={this.state.showModal}
                            closeModal={this.closeModalHandler}
                            deletePlayer={this.deletePlayerHandler}
                            message={this.deleteModalWarningMessage}
                            dangerBtnText={this.dangerBtnText}
                            primaryBtnText={this.primaryBtnText} /> }
                    </form>
                </div>
                <hr />
                <h3>Fantasy Team Tables</h3>
                <FantasyTeamTable />
            </div>
        )
    }
}

export default Fantasy;