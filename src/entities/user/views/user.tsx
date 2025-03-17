import type { FC } from 'react';
import { clsx } from 'clsx';
import { useGetSessionQuery } from '../api';

interface Props {
  className?: string;
}

export const User: FC<Props> = ({ className }) => {
  const { data } = useGetSessionQuery();

  return (
    <div data-testid="user" className={clsx('', className)}>
      {data?.session?.user.email}
    </div>
  );
};
