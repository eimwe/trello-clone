import { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

interface IconProps {
  title?: string;
  icon: React.ReactNode;
}

const Icon:FC<IconProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  title,
  icon,
  ...props
}) => (
    <IconButton
      {...props}>
      <span>{title}</span>
      {icon}
    </IconButton>
  );

const IconButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  padding: 0.25em;
  margin-inline-start: auto;
`;

export default Icon;
