import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../shared/store/store';
import ProductCard from '../../../widgets/product/card/ProductCard';
import { ProductStateModel } from '../../../entities/product/models/product-state.model';

const ProductList: React.FC<ProductStateModel> = () => {
    const products = useSelector((state: RootState) => state.product.products);
    return (
        <>
            {products.length > 0 ? (
                products.map(product => <ProductCard key={product.id} {...product} />)
            ) : (
                <p>No products available.</p>
            )}
        </>
    );
};

export default ProductList;
