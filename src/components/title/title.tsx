import { HTMLAttributes, FC, useState } from 'react';
import styled from 'styled-components';
import Input from '../ui/input/input';
import StorageService from '../../services/storage';

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
  const [columnHeading, setColumnHeading] = useState(columnName);

  const setColumnTitle = (id: number, newTitle: string) => {
    const receivedColumns = StorageService.getColumns();

    const updatedColumns = receivedColumns.map(column => {
      if (id === column.id) {
        column.title = newTitle;
        setColumnHeading(column.title);
      }

      if (column.title.length === 0) {
        column.title = 'Column name';
        setColumnHeading(column.title);
      }

      return {id: column.id, title: column.title};
    });

    StorageService.setColumns(updatedColumns);
  }

  return (
    <div>
      {isOpened ? (
        <Input 
        data-id={index}
        type="text"
        value={columnHeading}
        onChange={(e) => setColumnTitle(index, (e.target as HTMLInputElement).value)}
        onBlur={() => setIsOpened(false)}
        placeholder="Enter column name"
        autoFocus />
      ) : (
        <StyledTitle
        onClick={() => setIsOpened(true)}
        {...props}>
          {columnHeading}
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