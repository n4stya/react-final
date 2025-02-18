import React, { useState } from 'react';
import useProducts from '../../../shared/hooks/useProducts';
import ProductList from './ProductList';
import ProductCreationContainer from '../creation/ProductCreationContainer';
import CartModal from '../../../widgets/modal/cart/CartModal';
import { Title, Header, ShoppingCartButton, ShoppingCartIcon } from './product-list.styles';
import { ProductModel } from '../../../entities/product/models/product.model';
import { useDispatch } from 'react-redux';
import { updateProductAction } from '../../../shared/store/product/product.slice';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProducts();
    const dispatch = useDispatch();

    const [cartOpen, setCartOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState<ProductModel[]>([]);
    const [productToEdit, setProductToEdit] = useState<ProductModel | null>(null);

    const toggleCart = () => setCartOpen(prev => !prev);

    const toggleEditModal = (product?: ProductModel) => {
        setProductToEdit(product || null);
        setEditModalOpen(prev => !prev);
    };

    const handleOpenCreateModal = () => {
        toggleEditModal();
    };

    const handleAddToCart = (product: ProductModel) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const handleRemoveItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleUpdateItem = (id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const handleSubmit = async (data: ProductModel) => {
        dispatch(updateProductAction(data));
        toggleEditModal();
        setCartItems(prevItems => prevItems.map(item => (item.id === data.id ? data : item)));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header>
                <Title>
                    Products
                    <ShoppingCartButton onClick={toggleCart}>
                        My cart
                        <ShoppingCartIcon fontSize='small' />
                    </ShoppingCartButton>
                </Title>
            </Header>
            <ProductList
                products={products}
                onAddToCart={handleAddToCart}
                onOpenCart={toggleCart}
                cartItems={cartItems}
                onEdit={toggleEditModal}
            />
            <ProductCreationContainer
                onSubmit={handleSubmit}
                productToEdit={productToEdit}
                isOpen={editModalOpen}
                onClose={toggleEditModal}
                onOpenCreateModal={handleOpenCreateModal}
            />
            <CartModal
                open={cartOpen}
                onClose={toggleCart}
                cartItems={cartItems}
                onRemoveItem={handleRemoveItem}
                onUpdateItem={handleUpdateItem}
            />
        </>
    );
};

export default ProductListContainer;
