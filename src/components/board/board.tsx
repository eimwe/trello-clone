import styled from 'styled-components';
import AuthModal from '../authorization/auth-modal';
import Column from '../column/column';

const Board = () => {
  const columnNames = [
    'TODO',
    'In Progress',
    'Testing',
    'Done'
  ];

  return (
    <Wrapper>
      <Title>Trello clone</Title>
      <ColumnContainer>
        <Column columnNames={columnNames} />
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
`;

const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  gap: 1em;
`;

export default Board;