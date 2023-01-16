import { HTMLAttributes, FC } from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../ui/input/input';
import StorageService from '../../hooks/storage-service';

const Title:FC<HTMLAttributes<HTMLHeadingElement>> = ({
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [columnTitle, setColumnTitle] = StorageService<string>('Columnname', '');

  useEffect(() => {
    if (columnTitle.length > 0) {
      localStorage.setItem('Columnname', JSON.stringify(columnTitle));
    }
  }, [columnTitle]);

  return (
    <div>
      {isOpened ? (
        <Input 
        type="text"
        value={columnTitle}
        onChange={(e) => {
          setColumnTitle((e.target as HTMLInputElement).value)
        }}
        onBlur={() => setIsOpened(false)}
        placeholder="Enter column name" />
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