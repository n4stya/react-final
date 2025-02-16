import React, { memo, FC, useState } from 'react';
import { ProductModel } from '../../../entities/product/models/product.model';
import Description from './description/ProductCardDescription';
import { useDispatch } from 'react-redux';
import { deleteProductApi } from '../../../shared/services/product-api.service';
import { deleteProductAction } from '../../../shared/store/product/product.slice';
import ConfirmationModal from '../../modal/confirmation/ConfirmationModal';
import { CardContainer, Image, DeleteButton, Content, Title, Price } from './product-card.styles';

const ProductCard: FC<ProductModel> = ({ title, image, price, description, id }) => {
    const [confirmationVisible, setConfirmationVisible] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = async () => {
        try {
            await deleteProductApi(id);
            dispatch(deleteProductAction(id));
        } catch (error) {
            console.error('Ошибка при удалении продукта:', error);
        } finally {
            setConfirmationVisible(false);
        }
    };

    const openConfirmationModal = () => {
        setConfirmationVisible(true);
    };

    const closeConfirmationModal = () => {
        setConfirmationVisible(false);
    };

    return (
        <CardContainer>
            <Image src={image} alt={title} />
            <DeleteButton onClick={openConfirmationModal} />
            <Content>
                <Title>{title}</Title>
                <Description text={description} />
            </Content>
            <Price>${price.toFixed(2)}</Price>
            <ConfirmationModal
                title='You are about to delete product'
                message='Are you sure you want to delete this product? This action cannot be undone'
                visible={confirmationVisible}
                onConfirm={handleDelete}
                onCancel={closeConfirmationModal}
            />
        </CardContainer>
    );
};

export default memo(ProductCard);
