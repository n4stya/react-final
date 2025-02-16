import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';
import { ProductModel } from '../../entities/product/models/product.model';
import { AppDispatch } from '../store/store';
import { setProductsAction } from '../store/product/product.slice';

const fetchProductsApi = async (): Promise<AxiosResponse<ProductModel[]>> => {
    return await axios.get<ProductModel[]>(PRODUCTS_URL);
};

export const createProductApi = async (product: Partial<ProductModel>): Promise<ProductModel> => {
    const response = await axios.post(PRODUCTS_URL, product);
    return response.data;
};

export const deleteProductApi = async (productId: number): Promise<void> => {
    await axios.delete(`${PRODUCTS_URL}/${productId}`);
};

export const loadProducts = async (dispatch: AppDispatch) => {
    try {
        const response = await fetchProductsApi();
        dispatch(setProductsAction(response.data));
    } catch (error) {
        console.error('Ошибка при загрузке продуктов:', error);
    }
};

export { fetchProductsApi };
