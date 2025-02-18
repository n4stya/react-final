export interface CartItemProps {
    title: string;
    image: string;
    price: number;
    onRemove: () => void;
    onClick: () => void;
}

export interface CartItemType {
    id: number;
    title: string;
    image: string;
    price: number;
    description?: string;
}
