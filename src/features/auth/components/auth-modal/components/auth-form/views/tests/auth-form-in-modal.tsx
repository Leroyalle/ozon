import type { FC } from 'react';
import { Modal, ModalContent } from '@heroui/react';
import { AuthForm } from '../auth-form';

export const AuthFormInModal: FC = () => {
  return (
    <Modal isOpen>
      <ModalContent>
        <AuthForm />
      </ModalContent>
    </Modal>
  );
};
