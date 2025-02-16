import React from 'react';
import useProducts from '../../../shared/hooks/useProducts';
import ProductList from './ProductList';
import ProductCreationContainer from '../creation/ProductCreationContainer';
import { Title } from './product-list.styles';

const ProductListContainer: React.FC = () => {
    const { products, loading, error } = useProducts();

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <Title>Products</Title>
            <ProductList products={products} />
            <ProductCreationContainer />
        </>
    );
};

export default ProductListContainer;
