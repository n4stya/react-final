import React from 'react';
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
    if (!visible) {
        return null;
    }
    return (
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
        </ModalOverlay>
    );
};

export default ConfirmationModal;
