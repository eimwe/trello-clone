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

  info: () => `
    background-color: var(--bg-transparent);

    & svg {
      transition: transform var(--duration);
    }

    &:hover svg {
      transform: rotate(-180deg)
    }
  `,
};

export default buttonStyles;