export interface CartModalProps {
    open: boolean;
    onClose: () => void;
    cartItems: {
        id: number;
        title: string;
        image: string;
        price: number;
    }[];
    onRemoveItem: (id: number) => void;
    onUpdateItem: (id: number) => void;
}
