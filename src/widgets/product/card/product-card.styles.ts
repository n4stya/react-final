import styled from 'styled-components';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 23px;
    padding: 16px;
    margin: 0 auto 15px auto;
    background-color: #ffffff;
    max-width: 900px;
    flex-direction: row;
    position: relative;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 15px;
    margin-right: 16px;
`;

export const Content = styled.div`
    flex: 1;
`;

export const Title = styled.h3`
    margin: 0;
    font-size: 1.2em;
    padding-left: 8px;
`;

export const Price = styled.p`
    margin: 0 30px;
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
`;

export const EditIcon = styled(EditRoundedIcon)`
    && {
        color: #868686;
        cursor: pointer;
        position: absolute;
        top: 14px;
        right: 44px;
    }
`;

export const AddToCartIcon = styled(AddShoppingCartRoundedIcon)`
    && {
        color: #868686;
        cursor: pointer;
        position: absolute;
        top: 14px;
        right: 14px;
    }
`;

export const AddedToCartIcon = styled(ShoppingCartRoundedIcon)`
    && {
        color: #fd6c52;
        cursor: pointer;
        position: absolute;
        top: 14px;
        right: 14px;
    }
`;
