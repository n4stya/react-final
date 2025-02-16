import styled from 'styled-components';
import { ReactComponent } from '../../assets/icons/cross.svg';

export const Overlay = styled.div<{ visible: boolean }>`
    display: ${({ visible }) => (visible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    border-radius: 20px;
`;

export const CloseIcon = styled(ReactComponent)`
    margin-right: 20px;
    color: #868686;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h3`
    margin: 20px;
`;
