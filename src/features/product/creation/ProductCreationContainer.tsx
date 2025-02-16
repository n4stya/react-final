import React, { useState, useCallback } from 'react';
import Modal from '../../../widgets/modal/Modal';
import CreateButton from '../../../shared/buttons/create-button/CreateButton';
import ProductCreationForm from './ProductCreationForm';
import { ProductModel } from '../../../entities/product/models/product.model';
import { useDispatch } from 'react-redux';
import { createProductApi } from '../../../shared/services/product-api.service';
import { addProductAction } from '../../../shared/store/product/product.slice';

const ProductCreationContainer: React.FC = () => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalOpen = useCallback(() => setModalVisible(true), []);
    const handleModalClose = useCallback(() => {
        setModalVisible(false);
    }, []);

    const handleSubmit = useCallback(
        async (productData: Partial<ProductModel>) => {
            try {
                const newProduct = {
                    ...productData,
                    id: Date.now(),
                    title: productData.title || '',
                    price: productData.price ?? 0,
                    description: productData.description || '',
                    category: productData.category || '',
                    image: productData.image || ''
                };
                await createProductApi(newProduct);
                dispatch(addProductAction(newProduct));
                handleModalClose();
            } catch (error) {
                console.error('Error creating product:', error);
            }
        },
        [dispatch, handleModalClose]
    );

    return (
        <>
            <CreateButton onClick={handleModalOpen} />
            <Modal visible={modalVisible} onClose={handleModalClose}>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
        </>
    );
};

export default ProductCreationContainer;
