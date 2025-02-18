import { CartItemType } from './CartItemProps';

export interface ProductDetailModalProps {
    item: CartItemType | null;
    onClose: () => void;
}
