import { useState, useEffect } from 'react';
import DialogModal from '../modal/dialog-modal';
import Button from '../ui/button/button';
import Input from '../ui/input/input';
import StorageService from '../../hooks/storage-service';

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
        className="grid-container"
      >
        <Input 
          type="text"
          value={userName}
          onChange={(e) => setUserName((e.target as HTMLInputElement).value)}
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