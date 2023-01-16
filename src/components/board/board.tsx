import styled from 'styled-components';
import AuthModal from '../authorization/auth-modal';

const Board = () => {
  return (
    <Wrapper>
      <Title>Trello clone</Title>
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

export default Board;