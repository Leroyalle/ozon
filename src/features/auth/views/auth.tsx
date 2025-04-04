import type { FC } from 'react';
import { clsx } from 'clsx';
import { AuthModal } from '../components';
import { useCheckAuth } from '../hooks';

interface Props {
  className?: string;
}

export const Auth: FC<Props> = ({ className }) => {
  useCheckAuth('no-auth');

  return (
    <div className={clsx('', className)}>
      <AuthModal />
    </div>
  );
};
