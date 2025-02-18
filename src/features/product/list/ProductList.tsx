import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../shared/store/store';
import ProductCard from '../../../widgets/product/card/ProductCard';
import { ProductListProps } from '../../../entities/product/interfaces/ProductListProps';

const ProductList: React.FC<ProductListProps> = ({ onAddToCart, onOpenCart, cartItems, onEdit }) => {
    const products = useSelector((state: RootState) => state.product.products);

    return (
        <>
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        onAddToCart={onAddToCart}
                        onOpenCart={onOpenCart}
                        isAdded={cartItems.some(item => item.id === product.id)}
                        onEdit={() => onEdit(product)}
                    />
                ))
            ) : (
                <p>No products available.</p>
            )}
        </>
    );
};

export default ProductList;
