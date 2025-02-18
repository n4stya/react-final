import React from 'react';
import { Overlay, ModalContainer, Header, Title, CloseIcon } from './modal.styles';
import { ModalProps } from '../../entities/product/interfaces/ModalProps';

const Modal: React.FC<ModalProps> = ({ visible, onClose, children, modalTitle }) => {
    return (
        <Overlay visible={visible} onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <Header>
                    <Title>{modalTitle}</Title>
                    <CloseIcon onClick={onClose} />
                </Header>
                {children}
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;
