import { useState } from "react";
import DialogModal from "./DialogModal";

const DialogModalAuth = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onProceed = () => {
    console.log("Proceed clicked");
  };

  return (
    <div>
      <button onClick={() => setIsOpened(true)}>Open "dialog" modal</button>

      <DialogModal
        title="What's your name?"
        isOpened={isOpened}
        onProceed={onProceed}
        onClose={() => setIsOpened(false)}
      >
        <p>To close: click Close, press Escape, or click outside.</p>
      </DialogModal>
    </div>
  );
};

export default DialogModalAuth;