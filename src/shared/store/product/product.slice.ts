import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../../entities/product/models/product-state.model';
import { ProductModel } from '../../../entities/product/models/product.model';

const initialState: ProductStateModel = {
    products: []
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction(state, action: PayloadAction<ProductModel[]>) {
            state.products = action.payload;
        },
        addProductAction: (state, action: PayloadAction<ProductModel>) => {
            const newProduct = { ...action.payload, isCreatedByUser: true };
            state.products = [newProduct, ...state.products];
        },
        deleteProductAction: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProductAction: (state, action: PayloadAction<ProductModel>) => {
            const index = state.products.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        }
    }
});

export const { setProductsAction, addProductAction, deleteProductAction, updateProductAction } = productSlice.actions;
export default productSlice.reducer;
