import React, { useState, useEffect, useCallback } from 'react';
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

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ onSubmit, loading, productToEdit }) => {
    const initialFormData = {
        title: '',
        description: '',
        image: null as File | null,
        imageName: '',
        imagePreview: '',
        price: undefined as number | undefined,
        priceInput: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState('');

    useEffect(() => {
        if (productToEdit) {
            setFormData({
                title: productToEdit.title,
                description: productToEdit.description,
                image: null,
                imageName: productToEdit.imageName || '',
                imagePreview: productToEdit.image || '',
                price: productToEdit.price,
                priceInput: productToEdit.price ? productToEdit.price.toString() : ''
            });
        } else {
            setFormData(initialFormData);
        }
    }, [productToEdit]);

    const resetForm = () => {
        setFormData(initialFormData);
        setError('');
    };

    const validateForm = () => {
        const errors = [];
        if (!formData.title) errors.push('! Product name is required');
        if (formData.price === undefined || formData.price <= 0) errors.push('! Price is required');
        if (!formData.image && !productToEdit) errors.push('! Image is required');
        return errors.join(' ');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        const imageUrl = formData.image ? URL.createObjectURL(formData.image) : productToEdit?.image;

        await onSubmit({
            ...formData,
            image: imageUrl
        });
        resetForm();
    };

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file,
                imagePreview: URL.createObjectURL(file),
                imageName: file.name
            }));
        } else {
            resetForm();
        }
    }, []);

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
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                    error={!!error && !formData.title}
                />
                <StyledTextField
                    label='Description'
                    variant='outlined'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                />
                <StyledTextField
                    label='Price'
                    variant='outlined'
                    name='priceInput'
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
                    {loading ? 'Creating...' : productToEdit ? 'Update' : 'Create'}
                </StyledButton>
            </StyledContainer>
        </form>
    );
};

export default ProductCreationForm;
