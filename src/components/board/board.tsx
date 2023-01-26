import styled from 'styled-components';
import AuthModal from '../authorization/auth-modal';
import Column from '../column/column';
import StorageService from '../../services/storage';

const Board = () => {

  const provideColumnData = () => {
    let columns: { id: number, title: string }[] = [];

    const existingColumns = StorageService.getColumns();

    if (existingColumns.length > 0) {
      columns = existingColumns;
    } else {
      columns = [
        {
          id: 0,
          title: 'TODO'
        },
        {
          id: 1,
          title: 'In Progress'
        },
        {
          id: 2,
          title: 'Testing'
        },
        {
          id: 3,
          title: 'Done'
        }
      ];

      StorageService.setColumns(columns);
    }

    return columns;
  }

  return (
    <Wrapper>
      <Title>Trello clone</Title>
      <ColumnContainer>
        <Column columns={provideColumnData()} />
      </ColumnContainer>
      <AuthModal />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 200px;
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
  background-color: var(--bg-board);
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  margin-block-end: 1em;
`;

const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  gap: 1em;
`;

export default Board;