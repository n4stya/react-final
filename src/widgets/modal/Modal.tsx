import React from 'react';
import { Overlay, ModalContainer, Header, Title, CloseIcon } from './modal.styles';
import { ModalProps } from '../../entities/product/interfaces/ModalProps';

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    return (
        <Overlay visible={visible} onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <Header>
                    <Title>Create product</Title>
                    <CloseIcon onClick={onClose} style={{ cursor: 'pointer' }} />
                </Header>
                {children}
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
