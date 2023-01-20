import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';
import buttonStyles from './styles/button-styles';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'info';

interface ButtonProps {
  variant?: ButtonVariant;
  title?: string;
  icon?: React.ReactNode;
}

const Button:FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'primary',
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
  padding-block: 0.25em;
  padding-inline: 1em;
  margin-inline: auto;
  /*align-self: end;*/
  margin-block-start: auto;
  border-radius: 4px;
  text-transform: capitalize;
  background-repeat: no-repeat;
  background-size: contain;
  ${({$variant}) => buttonStyles[$variant]()};
`;

export default Button;
