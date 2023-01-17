import { HTMLAttributes, FC } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../ui/input/input';
import StorageService from '../../hooks/storage-service';

interface ColumnProps {
  index: number;
  columnName: string;
}

const Title:FC<ColumnProps & HTMLAttributes<HTMLHeadingElement>> = ({
  index,
  columnName,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [columnTitle, setColumnTitle] = StorageService<string>(`Columnname-${index}`, columnName);

  useEffect(() => {
    if (columnTitle.length > 0) {
      localStorage.setItem(`Columnname-${index}`, JSON.stringify(columnTitle));
    }
  }, [columnTitle]);

  const editInput = () => {
    if (columnTitle.length === 0) {
      setColumnTitle('Default');
    }

    setIsOpened(false);
  }

  return (
    <div>
      {isOpened ? (
        <Input 
        data-id={index}
        type="text"
        value={columnTitle}
        onChange={(e) => {
          setColumnTitle((e.target as HTMLInputElement).value)
        }}
        onBlur={editInput}
        placeholder="Enter column name"
        autoFocus />
      ) : (
        <StyledTitle
        onClick={() => setIsOpened(true)}
        {...props}>
          {columnTitle}
        </StyledTitle>
      )}
    </div>
  );
}

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 1.4em;
`;

export default Title;