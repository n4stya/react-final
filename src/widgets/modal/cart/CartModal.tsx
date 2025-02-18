import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CartModalProps } from '../../../entities/product/interfaces/CartModalProps';
import {
    CloseIcon,
    Header,
    StyledDialog,
    StyledDialogContent,
    Title,
    CartContent,
    CartItemsContainer,
    TotalPrice
} from './cart-modal.styles';
import CartItem from './item/CartItem';
import ConfirmationModal from '../confirmation/ConfirmationModal';
import ProductDetailModal from './detail/ProductDetailModal';
import { CartItemType } from '../../../entities/product/interfaces/CartItemProps';

const CartModal: React.FC<CartModalProps> = ({ open, onClose, cartItems, onRemoveItem }) => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [itemToRemove, setItemToRemove] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<CartItemType | null>(null);

    const handleRemoveItem = (id: number) => {
        setItemToRemove(id);
        setConfirmOpen(true);
    };

    const confirmRemoveItem = () => {
        if (itemToRemove !== null) {
            onRemoveItem(itemToRemove);
            setItemToRemove(null);
        }
        setConfirmOpen(false);
    };

    const cancelRemoveItem = () => {
        setItemToRemove(null);
        setConfirmOpen(false);
    };

    const handleOpenItemDetails = (item: CartItemType) => {
        setSelectedItem(item);
    };

    const handleCloseItemDetails = () => {
        setSelectedItem(null);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    const modalRoot = document.getElementById('modal-root');

    if (!modalRoot) {
        console.error('Modal root not found');
        return null;
    }

    return ReactDOM.createPortal(
        <StyledDialog open={open} onClose={onClose}>
            <Header>
                <Title>Product cart</Title>
                <CloseIcon onClick={onClose} />
            </Header>
            <StyledDialogContent>
                <CartContent>
                    {cartItems.length > 0 ? (
                        <CartItemsContainer>
                            {cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    onRemove={() => handleRemoveItem(item.id)}
                                    onClick={() => handleOpenItemDetails(item)}
                                />
                            ))}
                        </CartItemsContainer>
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                    {cartItems.length > 0 && <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>}
                </CartContent>
            </StyledDialogContent>
            <ConfirmationModal
                title='Confirm Deletion'
                message='Are you sure you want to delete this item?'
                visible={confirmOpen}
                onConfirm={confirmRemoveItem}
                onCancel={cancelRemoveItem}
            />
            <ProductDetailModal item={selectedItem} onClose={handleCloseItemDetails} />
        </StyledDialog>,
        modalRoot
    );
};

export default CartModal;
