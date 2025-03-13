import type { FC } from 'react';
import { clsx } from 'clsx';
import { AuthModal } from '../components';

interface Props {
  className?: string;
}

export const Auth: FC<Props> = ({ className }) => {
  return (
    <div className={clsx('', className)}>
      <AuthModal />
    </div>
  );
};
