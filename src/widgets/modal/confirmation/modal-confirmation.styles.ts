import styled from 'styled-components';
import { Button } from '@mui/material';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DeleteIcon = styled(DeleteOutlineRoundedIcon)`
    margin: 0 4px;
`;

export const CancelIcon = styled(CloseRoundedIcon)`
    margin: 0 5px;
`;

export const ModalContainer = styled.div`
    background: white;
    border-radius: 15px;
    max-width: 400px;
`;

export const Title = styled.h3`
    margin: 25px;
`;

export const Message = styled.p`
    margin: 25px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
    margin: 20px 0 0 0;
    background-color: #f0ecec;
    border-radius: 0 0 15px 15px;
`;

export const CancelButton = styled(Button)`
    && {
        border-radius: 8px;
        text-transform: none;
        background-color: #ffffff;
        padding: 8px 40px;
        color: #868686;
    }
`;

export const DeleteButton = styled(Button)`
    && {
        border-radius: 8px;
        text-transform: none;
        padding: 8px 40px;
        background-color: #fd6c52;
    }
`;
