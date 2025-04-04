import type { FC } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <Link
      to="/"
      className={clsx(
        'text-3xl font-bold tracking-wide text-yellow-500 hover:text-yellow-300 transition duration-300 ease-in-out',
        className,
      )}>
      <span>YYd33 Store</span>
    </Link>
  );
};
