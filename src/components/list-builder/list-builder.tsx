import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import Input from '../ui/input/input';
import Button from '../ui/button/button';
import AddIcon from '../../assets/icons/add-icon';
import List from '../list/list';
import StorageService from '../../services/storage';

interface ColumnProps {
  columnId: number;
}

const ListBuilder:React.FC<ColumnProps> = (props: ColumnProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [cardName, setCardName] = useState('Card name');
  const [cardId, setCardId] = useState(new Date().getTime());

  const createCardData = (id: number, cardTitle: string) => {
    const card = {id: id, title: cardTitle, columnId: props.columnId};

    StorageService.setCard(card);
  }

  const onBlur = () => {
    if (cardName.length === 0) {
      setCardName('Card name');
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCardId(cardId + 1);
    createCardData(cardId, cardName);
    setIsClicked(false);
  }

  return (
    <>
      <PreviewCardContainer>
        <List
          columnId={props.columnId}
        />
      </PreviewCardContainer>
      {isClicked ? (
        <StyledForm
          onSubmit = {onSubmit}
          className="grid-container"
        >
          <Input 
            type="text"
            value={cardName}
            onChange={(e) => {setCardName((e.target as HTMLInputElement).value)}}
            onBlur={onBlur}
            placeholder="Enter card name"
            autoFocus
          />
          <div
            className="flex-container"
          >
            <Button
              type="submit"
              title="Ok"
            />
            <Button
              type="button"
              title="Cancel"
              onClick={() => setIsClicked(false)}
              variant="danger"
            />
          </div>
        </StyledForm>
      ) : (
        <Button
          type="button"
          title="Add card"
          icon={<AddIcon />}
          onClick={() => {setIsClicked(true)}}
          variant="info"
        />
      )}
    </>
  );
}

const StyledForm = styled.form`
  align-self: end;
  padding: 1em;
  border-radius: var(--radius-block);
  background-color: var(--bg-card);
`;

const PreviewCardContainer = styled.div`
  display: grid;
  align-content: start;
  gap: 1em;
`;

export default ListBuilder;