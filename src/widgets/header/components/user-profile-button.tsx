import type { FC } from 'react';
import { clsx } from 'clsx';
import { UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGetSessionQuery } from '@/entities';

interface Props {
  className?: string;
}

export const UserProfileButton: FC<Props> = ({ className }) => {
  const { data } = useGetSessionQuery();
  return (
    <Link
      to={data?.session ? '/profile' : '/auth'}
      className={clsx('flex flex-col items-center', className)}>
      <UserRound size={22} />
      <span className="text-xs">{data?.session ? 'Профиль' : 'Войти'}</span>
    </Link>
  );
};
