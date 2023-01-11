import { useState, useEffect } from "react";
import styled from "styled-components";
import DialogModal from "./DialogModal";
import ButtonTemplate from "./Button";

const SubmitButton = styled(ButtonTemplate)`
  display: block;
  min-width: 25%;
  min-height: 25px;
  margin-inline: auto;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: rgb(143, 208, 207);
  cursor: pointer;

  &:hover {
    background-color: rgb(128, 187, 186);
  }
`;

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
  const [userName, setUserName] = useState (() => {
    const savedItem = localStorage.getItem("userName");
    const parsedItem = JSON.parse(savedItem !);
    return parsedItem || "";
  });

  useEffect(() => {
    setIsOpened(true);
    if (userName.length > 0) {
      localStorage.setItem("Username", JSON.stringify(userName));
    }
  }, [userName])

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
        <SubmitButton
          type="submit"
          title="ok"
          onClick={() => setIsOpened(false)}
        />
      </form>
    </DialogModal>
  );
};

export default DialogModalAuth;