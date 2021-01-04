import React from 'react';
import './Modal.css';
import {Modal} from 'react-bootstrap'

class DeleteFantasyPlayerModal extends React.Component {
    
    render() {
        return (
            <Modal.Dialog className='modal'>
                <Modal.Body className='modal-body'>
                    <p>Are you sure you want to delete player?</p>
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <button className='btn-danger'>Delete</button>
                    <button className='btn-primary'>Cancel</button>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default DeleteFantasyPlayerModal;