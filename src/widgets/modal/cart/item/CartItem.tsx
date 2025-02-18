import React from 'react';
import { CartItemContainer, Image, Title, Price, StyledContainer, DeleteIcon } from './cart-item.styles';
import { CartItemProps } from '../../../../entities/product/interfaces/CartItemProps';

const CartItem: React.FC<CartItemProps> = ({ title, image, price, onRemove, onClick }) => {
    const handleDeleteClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onRemove();
    };

    return (
        <CartItemContainer onClick={onClick}>
            <Image src={image} alt={title} />
            <DeleteIcon onClick={handleDeleteClick}></DeleteIcon>
            <StyledContainer>
                <Price>${price.toFixed(2)}</Price>
                <Title>{title}</Title>
            </StyledContainer>
        </CartItemContainer>
    );
};

export default CartItem;
