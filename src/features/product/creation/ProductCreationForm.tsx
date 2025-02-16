import React, { useState, useCallback } from 'react';
import { InputAdornment } from '@mui/material';
import { ProductCreationFormProps } from '../../../entities/product/interfaces/ProductCreationFormProps';
import {
    StyledButton,
    UploadButton,
    UploadIcon,
    StyledTextField,
    StyledContainer,
    ErrorMessage,
    ImagePreview,
    ImageContainer,
    ImageCaption
} from './product-creation.styles';

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ onSubmit, loading }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null as File | null,
        imageName: '',
        imagePreview: '',
        price: undefined as number | undefined,
        priceInput: ''
    });
    const [error, setError] = useState('');

    const handleReset = () => {
        setFormData({
            title: '',
            description: '',
            image: null,
            imageName: '',
            imagePreview: '',
            price: undefined,
            priceInput: ''
        });
        setError('');
    };

    const validateForm = () => {
        if (!formData.title) return '! Product name is required';
        if (formData.price === undefined || formData.price <= 0) return '! Price is required';
        if (!formData.image) return '! Image is required';
        return '';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        if (formData.image) {
            const imageUrl = URL.createObjectURL(formData.image);
            await onSubmit({
                ...formData,
                image: imageUrl,
                price: formData.price
            });
            handleReset();
        }
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }, []);

    const handleImageChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                setFormData(prev => ({
                    ...prev,
                    image: file,
                    imagePreview: URL.createObjectURL(file),
                    imageName: file.name
                }));
            } else {
                handleReset();
            }
        },
        [handleReset]
    );

    const handlePriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/ /g, '.');
        const regex = /^\d*\.?\d{0,2}$/;
        if (regex.test(value) || value === '') {
            setFormData(prev => ({
                ...prev,
                priceInput: value,
                price: value === '' ? undefined : parseFloat(value)
            }));
        }
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <StyledTextField
                    label='Product name'
                    variant='outlined'
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    error={!!error && !formData.title}
                />
                <StyledTextField
                    label='Description'
                    variant='outlined'
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                />
                <StyledTextField
                    label='Price'
                    variant='outlined'
                    value={formData.priceInput}
                    onChange={handlePriceChange}
                    fullWidth
                    error={!!error && (formData.price === undefined || formData.price <= 0)}
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                        inputProps: { maxLength: 10 }
                    }}
                />
                <input
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    id='image-upload'
                />
                <label htmlFor='image-upload'>
                    <UploadButton variant='contained' component='span' startIcon={<UploadIcon />}>
                        Upload Image
                    </UploadButton>
                </label>
                {formData.imagePreview && (
                    <ImageContainer>
                        <ImagePreview src={formData.imagePreview} alt='Preview' />
                        {formData.imageName && <ImageCaption>{formData.imageName}</ImageCaption>}
                    </ImageContainer>
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </div>
            <StyledContainer>
                <StyledButton variant='contained' type='submit' disabled={loading}>
                    {loading ? 'Creating...' : 'Create'}
                </StyledButton>
            </StyledContainer>
        </form>
    );
};

export default ProductCreationForm;
