import { useState, useEffect } from 'react';
import styled from 'styled-components';
import DialogModal from '../modal/dialog-modal';
import Button from '../ui/button/button';
import StorageService from '../../hooks/storage-service';

const TextInput = styled.input`
  display: block;
  min-width: 50%;
  min-height: 25px;
  padding-block: 0;
  margin-inline: auto;
  margin-block-end: 1em;
  border-radius: 4px;
`;

const DialogModalAuth = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [userName, setUserName] = StorageService<string>('Username', '');

  useEffect(() => {
    if (userName.length > 0) {
      localStorage.setItem('Username', JSON.stringify(userName));
    } else {
      setIsOpened(true);
    }
  }, [userName]);

  return (
    <DialogModal
    title="What's your name?"
    isOpened={isOpened}
    onClose={() => setIsOpened(false)}
    >
      <form
        onSubmit = {(e) => e.preventDefault()}
      >
        <TextInput
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
        />
        <Button
          type="submit"
          title="ok"
          onClick={() => setIsOpened(false)}
        />
      </form>
    </DialogModal>
  );
};

export default DialogModalAuth;