export interface ConfirmationModalProps {
    title: string;
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
    visible: boolean;
}
