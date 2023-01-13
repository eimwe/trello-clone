const buttonStyles = {
  named: () => `
    min-width: 25%;
    min-height: 25px;
    margin-inline: auto;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: var(--bg-submit);

    &:hover {
      background-color: var(--bg-submit-hovered);
    }
  `,

  unnamed: () => `
    position: absolute;
    top: 1em;
    right: 1em;
    padding: 0.25em;
    margin-inline-start: auto;
  `,

  anchored: () => `
    justify-content: space-between;
  `,
};

export default buttonStyles;