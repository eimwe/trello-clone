import styled from 'styled-components';
import { HTMLAttributes, FC } from 'react';

interface InputProps {
  type: string;
  value: string;
};

const Input:FC<InputProps & HTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <TextInput
      {...props}
    />
  );
};

const TextInput = styled.input`
  padding-block: 0.25em;
  border-radius: 4px;
  background-color: var(--bg-transparent);
`;

export default Input;