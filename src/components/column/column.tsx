import styled from 'styled-components';
import Title from '../title/title';
import Button from '../ui/button/button';
import AddIcon from '../../assets/icons/add-icon';

const Column = () => {
  return (
    <StyledColumn className="grid-container">
      <Title />
      <Button
        type="button"
        title="Add card"
        icon={<AddIcon />}
        onClick={() => console.log('card added')}
        variant="secondary"
      />
    </StyledColumn>
  );
}

const StyledColumn = styled.section`
  padding: 1em;
  border-radius: var(--radius-block);
  background-color: var(--bg-body);
`;

export default Column;