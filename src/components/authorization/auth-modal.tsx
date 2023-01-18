import { useState, useEffect } from 'react';
import DialogModal from '../modal/dialog-modal';
import Button from '../ui/button/button';
import Input from '../ui/input/input';
import StorageService from '../../services/storage';

const DialogModalAuth = () => {
  const [isOpened, setIsOpened] = useState(false);
  const authorName = StorageService.getUserName();

  useEffect(() => {
    if (!authorName) {
      setIsOpened(true);
    }
  }, [authorName]);

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
          onChange={(e) => StorageService.setUserName((e.target as HTMLInputElement).value)}
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