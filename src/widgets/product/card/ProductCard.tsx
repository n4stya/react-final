import React, { memo, FC } from 'react';
import { ProductCardProps } from '../../../entities/product/interfaces/ProductCardProps';
import Description from './description/ProductCardDescription';
import {
    CardContainer,
    Image,
    AddToCartIcon,
    Content,
    Title,
    Price,
    AddedToCartIcon,
    EditIcon
} from './product-card.styles';

const ProductCard: FC<ProductCardProps> = ({
    title,
    image,
    price,
    description,
    id,
    category,
    onAddToCart,
    onOpenCart,
    isAdded,
    onEdit,
    isCreatedByUser
}) => {
    const handleAddToCart = () => {
        if (!isAdded) {
            onAddToCart({ title, image, price, description, id, category });
        } else {
            onOpenCart();
        }
    };

    return (
        <CardContainer>
            <Image src={image} alt={title} />
            {isAdded ? <AddedToCartIcon onClick={onOpenCart} /> : <AddToCartIcon onClick={handleAddToCart} />}
            <Content>
                <Title>{title}</Title>
                <Description text={description} />
            </Content>
            <Price>${price.toFixed(2)}</Price>
            {isCreatedByUser && <EditIcon onClick={() => onEdit({ title, image, price, description, id, category })} />}
        </CardContainer>
    );
};

export default memo(ProductCard);
