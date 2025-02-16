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
        addProductAction(state, action: PayloadAction<ProductModel>) {
            state.products = [action.payload, ...state.products];
        },
        deleteProductAction: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    }
});

export const { setProductsAction, addProductAction, deleteProductAction } = productSlice.actions;
export default productSlice.reducer;
