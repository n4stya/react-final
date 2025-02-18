import { ProductModel } from '../models/product.model';

export interface ProductCreationFormProps {
    onSubmit: (data: Partial<ProductModel>) => Promise<void>;
    loading?: boolean;
    productToEdit?: ProductModel | null;
}
