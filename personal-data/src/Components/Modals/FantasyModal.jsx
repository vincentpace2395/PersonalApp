import React from 'react';
import './Modal.css';
import {Modal} from 'react-bootstrap'

class FantasyModal extends React.Component {
    
    render() {
        return (
            <Modal.Dialog className='modal'>
                <Modal.Body className='modal-body'>
                    <p>{this.props.message}</p>
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <button className='btn-danger' onClick={this.props.deletePlayer}>{this.props.dangerBtnText}</button>
                    <button className='btn-primary' onClick={this.props.closeModal}>{this.props.primaryBtnText}</button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default FantasyModal;