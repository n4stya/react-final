import styled from 'styled-components';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

export const CartItemContainer = styled.li`
    display: flex;
    margin-bottom: 15px;
    max-width: 170px;
    flex-direction: column;
    position: relative;
`;

export const StyledContainer = styled.div`
    padding: 5px 7px 0 7px;
`;

export const Image = styled.img`
    width: 170px;
    height: 200px;
    object-fit: cover;
    border-radius: 20px;
    margin-right: 16px;
`;

export const Title = styled.h3`
    font-size: 0.9em;
    margin: 0;
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(65, 65, 65);
`;

export const Price = styled.p`
    font-size: 1.3em;
    color: #333;
    margin: 0;
    font-weight: 600;
    color: black;
`;

export const DeleteIcon = styled(DeleteOutlineRoundedIcon)`
    position: absolute;
    top: 5px;
    right: 5px;
    color: white;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.44);
    padding: 5px;
    border-radius: 50px;

    &:hover {
        color: #ff5a3d;
    }
`;
