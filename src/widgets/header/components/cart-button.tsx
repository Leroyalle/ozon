import type { FC } from 'react';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { useGetSessionQuery } from '@/entities';
import { ShoppingCart } from 'lucide-react';
import { useGetCartItemsQuery } from '@/features';
import { Skeleton } from '@heroui/react';

interface Props {
  className?: string;
}

export const CartButton: FC<Props> = ({ className }) => {
  const { data } = useGetSessionQuery();
  const { data: cartItems, isLoading: isLoadingCart } = useGetCartItemsQuery();

  if (isLoadingCart) {
    return <Skeleton className="h-[37px] w-[45px] rounded-xl" />;
  }

  if (!data?.session || !cartItems) {
    return null;
  }

  return (
    <Link to="/cart" className={clsx('flex flex-col items-center relative', className)}>
      <ShoppingCart size={22} />
      {cartItems.length > 0 && (
        <span className="absolute -top-0.5 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-1.1 rounded-full">
          {cartItems.length}
        </span>
      )}
      <span className="text-xs">Корзина</span>
    </Link>
  );
};
