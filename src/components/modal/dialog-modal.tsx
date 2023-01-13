import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import StyledButton from '../ui/button/button';
import CloseIcon from '../../assets/icons/close-icon';

const Container = styled.dialog`
  position: relative;
  min-width: 300px;
  padding: 2em;
  border-radius: 8px;
  border: 1px solid var(--clr-border);
`;

const HeadingLevel2 = styled.h2`
  text-align: center;
`;

type Props = {
  title: string;
  isOpened: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const DialogModal = ({
  title,
  isOpened,
  onClose,
  children,
}: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

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
        <StyledButton
          className='sr-only'
          title='Close modal'
          icon={<CloseIcon />}
          onClick={onClose}
          variant='unnamed'
        />
        <HeadingLevel2>
          {title}
        </HeadingLevel2>

        {children}

      </div>
    </Container>
  );
};

export default DialogModal;