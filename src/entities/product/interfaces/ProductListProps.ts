import { ProductModel } from '../models/product.model';

export interface ProductListProps {
    products: ProductModel[];
    onAddToCart: (product: ProductModel) => void;
    onOpenCart: () => void;
    cartItems: ProductModel[];
    onEdit: (product: ProductModel) => void;
}
