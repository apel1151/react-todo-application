import React from 'react';
import './DeleteAlert.css';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

const DeleteAlert = ({openModal, toggle2, handleDelete}) => {
    return (
        <Modal isOpen={openModal} toggle={toggle2} className='delete-modal'>
            <ModalHeader toggle={toggle2}>Do you want to delete?</ModalHeader>
            
            <ModalFooter>
            <Button color="primary" onClick={handleDelete}>
                Delete
            </Button>{' '}
            <Button color="secondary" onClick={toggle2}>
                Cancel
            </Button>
            </ModalFooter>
        </Modal>
    );
};

export default DeleteAlert;