import React, { useState, useMemo, useCallback } from 'react';
import { IconButton } from '@mui/material';
import { StyledText, ArrowUp, ArrowDown } from './product-card-description.styles';
import { ProductCardDescriptionProps } from '../../../../entities/product/interfaces/ProductCardDescriptionProps';
import { MAX_LENGTH } from '../../../../shared/constants/api.constants';

const ProductCardDescription: React.FC<ProductCardDescriptionProps> = ({ text, maxLength = MAX_LENGTH }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDetails = useCallback(() => {
        setIsExpanded(prev => !prev);
    }, []);

    const displayedText = useMemo(() => {
        if (isExpanded || text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }, [isExpanded, text, maxLength]);

    return (
        <>
            <StyledText>{displayedText}</StyledText>
            {text.length > maxLength && (
                <IconButton onClick={toggleDetails} size='small'>
                    {isExpanded ? <ArrowUp fontSize='small' /> : <ArrowDown fontSize='small' />}
                </IconButton>
            )}
        </>
    );
};

export default ProductCardDescription;
