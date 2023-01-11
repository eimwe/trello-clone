import React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button {...props}>
      {title}
    </button>
  );
};

const ButtonTemplate = styled(Button)`
  vertical-align: middle;
  border: none;
  font: inherit;
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: contain;
`;

export default ButtonTemplate;