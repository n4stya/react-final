import React from 'react';
import ReactDOM from 'react-dom';
import {
    ModalOverlay,
    ModalContainer,
    Title,
    Message,
    ButtonContainer,
    DeleteButton,
    DeleteIcon,
    CancelButton,
    CancelIcon
} from './modal-confirmation.styles';
import { ConfirmationModalProps } from '../../../entities/product/interfaces/ConfirmationModalProps';

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ title, onConfirm, onCancel, message, visible }) => {
    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot || !visible) {
        return null;
    }

    return ReactDOM.createPortal(
        <ModalOverlay>
            <ModalContainer>
                <Title>{title}</Title>
                <Message>{message}</Message>
                <ButtonContainer>
                    <DeleteButton onClick={onConfirm} variant='contained' startIcon={<DeleteIcon />}>
                        Delete
                    </DeleteButton>
                    <CancelButton onClick={onCancel} variant='contained' startIcon={<CancelIcon />}>
                        Cancel
                    </CancelButton>
                </ButtonContainer>
            </ModalContainer>
        </ModalOverlay>,
        modalRoot
    );
};

export default ConfirmationModal;
