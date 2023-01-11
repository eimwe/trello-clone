import { useEffect, useRef } from "react";
import styled from "styled-components";
import ButtonTemplate from "./Button";
//@ts-ignore
import iconClose from "../assets/icons/close.svg";

const Container: any = styled.dialog`
  width: 400px;
  border-radius: 8px;
  border: 1px solid #888;

  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const DeleteButton = styled(ButtonTemplate)`
  display: block;
  min-width: 24px;
  min-height: 24px;
  margin-inline-start: auto;
  background-image: url(${iconClose});
`;

type Props = {
  title: string;
  isOpened: boolean;
  onProceed: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

const DialogModal = ({
  title,
  isOpened,
  onClose,
  children,
}: Props) => {
  const ref: any = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <Container ref={ref} onCancel={onClose} onClick={onClose}>
      <div onClick={preventAutoClose}>
      <DeleteButton onClick={onClose} />
        <h2>{title}</h2>

        {children}

      </div>
    </Container>
  );
};

export default DialogModal;