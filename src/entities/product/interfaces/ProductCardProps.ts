import { ProductModel } from '../models/product.model';

export interface ProductCardProps extends ProductModel {
    onAddToCart: (product: ProductModel) => void;
    onOpenCart: () => void;
    isAdded: boolean;
    onEdit: (product: ProductModel) => void;
    isCreatedByUser?: boolean;
}
