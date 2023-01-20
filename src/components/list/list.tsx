import styled from 'styled-components';
import StorageService from '../../services/storage';

interface ColumnProps {
  columnId: number;
}

const List:React.FC<ColumnProps> = (props: ColumnProps) => {
  const storedCards = StorageService.getCards();

  const filteredCards = storedCards?.filter(card => card.columnId === props.columnId);

  const renderedCards = filteredCards?.map(card =>
    <PreviewCard 
    key={card.id}
    data-id={card.id}
    >
      <header>
        <HeadingLvl3>{card.title}</HeadingLvl3>
      </header>
    </PreviewCard>
  );

  return (
    <>
      { renderedCards }
    </>
  );
}

const PreviewCard = styled.article`
  align-self: start;
  padding: 1em;
  border-radius: var(--radius-block);
  background-color: var(--bg-card);
`;

const HeadingLvl3 = styled.h3`
  margin: 0;
`;

export default List;