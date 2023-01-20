import styled from 'styled-components';
import Title from '../title/title';
import ListBuilder from '../list-builder/list-builder';

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
        <ListBuilder
          columnId={column.id}
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
  grid-template-rows: min-content;
  padding: 1em;
  border-radius: var(--radius-block);
  background-color: var(--bg-body);
`;

export default Column;