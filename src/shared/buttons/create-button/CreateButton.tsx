import React from 'react';
import { StyledButton } from './сreate-button.styles';

const CreateButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return <StyledButton onClick={onClick}>+</StyledButton>;
};

export default CreateButton;
