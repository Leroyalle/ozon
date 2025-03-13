import type { FC } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <Link to="/" className={clsx('uppercase text-3xl text-blue-500 font-bold', className)}>
      ozon
    </Link>
  );
};
