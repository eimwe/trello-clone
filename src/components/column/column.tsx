import styled from 'styled-components';
import Title from '../title/title';
import Button from '../ui/button/button';
import AddIcon from '../../assets/icons/add-icon';

interface BoardProps {
  columnNames: string[];
}

const Column: React.FC<BoardProps> = (props: BoardProps) => {

  const columnNames = props.columnNames.map((name, index) => {    

    return (
      <StyledColumn
        key={index}
        className="grid-container"
      >
        <Title
          index={index}
          columnName={name}
        />
        <Button
          type="button"
          title="Add card"
          icon={<AddIcon />}
          onClick={() => console.log('card added')}
          variant="secondary"
        />
      </StyledColumn>
    );
  });

  return (
    <>
      { columnNames }
    </>
  );
}

const StyledColumn = styled.section`
  padding: 1em;
  border-radius: var(--radius-block);
  background-color: var(--bg-body);
`;

export default Column;