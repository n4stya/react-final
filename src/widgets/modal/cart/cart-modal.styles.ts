import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';

export const Title = styled.h3`
    && {
        font-weight: 700;
        font-size: 1.5rem;
        padding-left: 24px;
        color: #282828;
    }
`;

export const StyledDialog = styled(Dialog)`
    .MuiDialog-paper {
        border-radius: 16px;
        background-color: #e7e7e7;
    }
`;

export const StyledDialogContent = styled(DialogContent)`
    && {
        padding-top: 0;
    }
`;

export const CartContent = styled.div``;

export const CloseIcon = styled(CloseRoundedIcon)`
    margin: 0 24px 0 auto;
    color: #868686;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TotalPrice = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    text-align: center;
    margin: 0 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #e7e7e7;
    padding: 10px 0;
`;

export const CartItemsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 7px;
    list-style-type: none;
    padding: 0;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
