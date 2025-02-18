import { ProductModel } from '../models/product.model';

export interface ProductCreationContainerProps {
    productToEdit?: ProductModel | null;
    onSubmit: (data: ProductModel) => Promise<void>;
    isOpen: boolean;
    onClose: () => void;
    onOpenCreateModal: () => void;
}
