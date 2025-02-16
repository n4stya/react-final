import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';

export const StyledButton = styled(Button)<{ component?: React.ElementType }>`
    && {
        border-radius: 15px;
        color: #ffffff;
        width: 90%;
        padding: 10px 0;
        background-color: #f5644b;
        margin: 10px 20px;
    }
`;

export const UploadButton = styled(Button)<{ component?: React.ElementType }>`
    && {
        border-radius: 15px;
        color: #f0ecec;
        width: 90%;
        padding: 10px 5px 10px 0;
        background-color: #a5a5a5;
        margin: 10px 20px 20px 20px;
    }
`;

export const UploadIcon = styled(UploadRoundedIcon)`
    margin: 0 5px;
`;

export const StyledTextField = styled(TextField)`
    && {
        margin: 10px 20px;
        width: 90%;
    }

    & .MuiOutlinedInput-root {
        border-radius: 10px;
    }
`;

export const StyledContainer = styled.div`
    background-color: #e2e2e2;
    padding: 10px 0;
    border-radius: 0 0 20px 20px;
`;

export const ErrorMessage = styled.div`
    color: #fd5852;
    margin: 5px 20px 0 20px;
    padding: 0 0 15px 0;
    display: flex;
    align-items: center;
    font-weight: 600;
`;

export const ImagePreview = styled.img`
    max-width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 15px;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    max-width: 400px;
    margin: 0 20px 18px 20px;
`;

export const ImageCaption = styled.div`
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    background-color: #a5a5a5;
    color: white;
    padding: 40px 20px 40px 115px;
    text-align: right;
    border-radius: 15px;
    overflow-wrap: break-word;
    word-break: break-all;
    max-width: 100%;
    max-height: 100px;
    z-index: -10;
`;
