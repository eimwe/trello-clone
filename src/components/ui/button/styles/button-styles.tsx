const buttonStyles = {
  primary: () => `  
    text-transform: uppercase;
    background-color: var(--bg-primary);

    &:hover {
      background-color: var(--bg-primary-hovered);
    }
  `,

  secondary: () => `
    background-color: var(--bg-secondary);

    &:hover {
      background-color: var(--bg-secondary-hovered);
    }
  `,

  danger: () => `
    color: var(--clr-font-white);
    background-color: var(--bg-danger);

    &:hover {
      background-color: var(--bg-danger-hovered);
    }
  `,
};

export default buttonStyles;