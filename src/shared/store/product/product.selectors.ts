import { RootState } from '../store';
import { ProductStateModel } from '../../../entities/product/models/product-state.model';

const selectProductState = (state: RootState): ProductStateModel => state.product;

export const selectProducts = (state: RootState) => selectProductState(state).products;
