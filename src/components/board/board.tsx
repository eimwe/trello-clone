import styled from 'styled-components';
import DialogModalAuth from '../DialogModalAuth';

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


const Board = () => {
  return (
    <Wrapper>
      <Title>Trello clone</Title>
      <DialogModalAuth />
    </Wrapper>
  );
}

export default Board;