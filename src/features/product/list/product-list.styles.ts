import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export const Title = styled(Typography)`
    && {
        font-weight: 700;
        font-size: 1.5rem;
        margin: 0 auto;
        text-transform: uppercase;
        text-align: center;
        display: flex;
        max-width: 916px;
        flex-direction: row;
        padding-left: 16px;
        color: #282828;
    }
`;

export const Header = styled.div`
    position: sticky;
    top: 0;
    background-color: #dddcdc;
    z-index: 1000;
    padding: 16px 0 16px 16px;
`;

export const ShoppingCartIcon = styled(ShoppingCartRoundedIcon)`
    && {
        cursor: pointer;
        margin-left: 10px;
    }
`;

export const ShoppingCartButton = styled(Button)`
    && {
        margin: 2px 32px 0 auto;
        border-radius: 50px;
        color: #ffffff;
        text-transform: none;
        background-color: #fd6c52;
        font-weight: 700;
        padding: 0 12px;
        height: 30px;
    }
`;
