import styled from 'styled-components';
import Title from '../title/title';
import Button from '../ui/button/button';
import AddIcon from '../../assets/icons/add-icon';

interface BoardProps {
  columns: { id: number, title: string }[];
}

const Column: React.FC<BoardProps> = (props: BoardProps) => {

  const renderedColumns = props.columns.map(column => {

    return (
      <StyledColumn
        key={column.id}
        className="grid-container"
      >
        <Title
          index={column.id}
          columnName={column.title}
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
      { renderedColumns }
    </>
  );
}

const StyledColumn = styled.section`
  padding: 1em;
  border-radius: var(--radius-block);
  background-color: var(--bg-body);
`;

export default Column;