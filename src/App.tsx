import DialogModalAuth from './components/DialogModalAuth';
import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 200px;
  padding: 1em;
  margin: 1em;
  border-radius: 10px;
  background: rgb(143, 177, 208);
  /*background: rgb(114, 141, 166);*/
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
`;

export default function App() {
  return (
    <Wrapper>
      <Title>Trello clone</Title>
      <DialogModalAuth />
    </Wrapper>
  );
}