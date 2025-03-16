import type { FC } from 'react';
import { Modal, ModalContent, ModalHeader } from '@heroui/react';
import { AuthForm } from '../components';

interface Props {
  className?: string;
}

export const AuthModal: FC<Props> = ({ className }) => {
  return (
    <Modal
      data-testid="authModal"
      className={className}
      isOpen
      placement="top-center"
      hideCloseButton>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Вход</ModalHeader>
        <AuthForm />
      </ModalContent>
    </Modal>
  );
};
