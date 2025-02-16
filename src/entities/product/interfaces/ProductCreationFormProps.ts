import { ProductModel } from '../models/product.model';

export interface ProductCreationFormProps {
    onSubmit: (product: Partial<ProductModel>) => void;
    loading?: boolean;
}
