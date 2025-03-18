import type { FC } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { useGetSessionQuery } from '@/entities';
import { ShoppingCart } from 'lucide-react';

interface Props {
  className?: string;
}

export const CartButton: FC<Props> = ({ className }) => {
  const { data } = useGetSessionQuery();

  if (!data?.session) {
    return null;
  }

  return (
    <Link to="/cart" className={clsx('flex flex-col items-center', className)}>
      <ShoppingCart size={22} />
      <span className="text-xs">Корзина</span>
    </Link>
  );
};
