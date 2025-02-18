import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const StyledDialog = styled(Dialog)`
    .MuiDialog-paper {
        border-radius: 16px;
        background-color: #e7e7e7;
        min-width: 740px;
        min-height: 400px;
    }
`;

export const StyledDialogContent = styled(DialogContent)`
    && {
        padding-top: 0;
    }
`;

export const Image = styled.img`
    width: 290px;
    height: 335px;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 16px;
`;

export const Title = styled.h3`
    margin: 0;
    max-width: 400px;
`;

export const Container = styled.div`
    display: flex;
`;

export const Details = styled.div`
    padding-top: 10px;
    height: 325px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Description = styled.p`
    max-width: 400px;
    margin-top: 20px;
`;

export const Price = styled.p`
    margin-top: auto;
    margin-bottom: 0;
    margin-left: auto;
    font-size: 1.3em;
    color: #333;
    font-weight: 600;
    color: black;
`;

export const CloseIcon = styled(CloseRoundedIcon)`
    margin: 0 0 0 auto;
    color: #868686;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
