import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import buttonStyles from './styles/button-styles';

type ButtonVariant = 'named' | 'unnamed' | 'anchored';

interface ButtonProps {
  variant?: ButtonVariant;
  title?: string;
  icon?: React.ReactNode;
}

const Button:FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'named',
  title,
  icon,
  ...props
}) => (
    <StyledButton
      $variant={variant}
      {...props}>
      <span>{title}</span>
      {icon}
    </StyledButton>
  );

const StyledButton = styled.button<{$variant: ButtonVariant}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  vertical-align: middle;
  font: inherit;
  background-repeat: no-repeat;
  background-color: var(--bg-button);
  background-size: contain;
  cursor: pointer;
  ${({$variant}) => buttonStyles[$variant]()};

  & svg {
    flex-shrink: 0;
  }
`;

export default Button;
