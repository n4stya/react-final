import React, { useCallback } from 'react';
import Modal from '../../../widgets/modal/Modal';
import CreateButton from '../../../shared/buttons/create-button/CreateButton';
import ProductCreationForm from './ProductCreationForm';
import { ProductModel } from '../../../entities/product/models/product.model';
import { useDispatch } from 'react-redux';
import { createProductApi } from '../../../shared/services/product-api.service';
import { addProductAction } from '../../../shared/store/product/product.slice';
import { ProductCreationContainerProps } from '../../../entities/product/interfaces/ProductCreationContainerProps';

const ProductCreationContainer: React.FC<ProductCreationContainerProps> = ({
    productToEdit,
    onSubmit,
    isOpen,
    onClose,
    onOpenCreateModal
}) => {
    const dispatch = useDispatch();

    const handleSubmit = useCallback(
        async (productData: Partial<ProductModel>) => {
            try {
                if (productToEdit) {
                    const updatedProduct = {
                        ...productToEdit,
                        ...productData
                    };
                    await onSubmit(updatedProduct);
                } else {
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
                }
                onClose();
            } catch (error) {
                console.error('Error creating or updating product:', error);
            }
        },
        [dispatch, productToEdit, onSubmit, onClose]
    );

    return (
        <>
            <CreateButton onClick={onOpenCreateModal} />
            <Modal visible={isOpen} onClose={onClose} modalTitle={productToEdit ? 'Update product' : 'Create product'}>
                <ProductCreationForm onSubmit={handleSubmit} productToEdit={productToEdit} />
            </Modal>
        </>
    );
};

export default ProductCreationContainer;
