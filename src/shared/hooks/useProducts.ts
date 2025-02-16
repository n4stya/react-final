import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../services/product-api.service';
import { selectProducts } from '../store/product/product.selectors';
import { AppDispatch } from '../store/store';
import { ProductModel } from '../../entities/product/models/product.model';

const useProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products: ProductModel[] = useSelector(selectProducts);
    const loading = products.length === 0;
    const error = '';

    useEffect(() => {
        if (products.length === 0) {
            loadProducts(dispatch);
        }
    }, [dispatch, products.length]);

    return { products, loading, error };
};

export default useProducts;
