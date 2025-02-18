import React from 'react';
import {
    StyledDialog,
    StyledDialogContent,
    Image,
    Title,
    Container,
    Description,
    Details,
    Price,
    CloseIcon,
    Header
} from './product-detail-modal.styles';
import { ProductDetailModalProps } from '../../../../entities/product/interfaces/ProductDetailModalProps';

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ item, onClose }) => {
    return (
        <StyledDialog open={!!item} onClose={onClose}>
            <StyledDialogContent>
                {item && (
                    <>
                        <Header>
                            <h2>Product details</h2>
                            <CloseIcon onClick={onClose}>Close</CloseIcon>
                        </Header>
                        <Container>
                            <Image src={item.image} alt={item.title} />
                            <Details>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                                <Price>${item.price.toFixed(2)}</Price>
                            </Details>
                        </Container>
                    </>
                )}
            </StyledDialogContent>
        </StyledDialog>
    );
};

export default ProductDetailModal;
