import type { FC } from 'react';
import { clsx } from 'clsx';
import { useGetCartItemsQuery } from '../api';
import { CartBody, CartHeader, CartSummary } from '../components';
import { Skeleton } from '@heroui/react';

interface Props {
  className?: string;
}

export const Cart: FC<Props> = ({ className }) => {
  const {
    data: cartItems,
    isLoading: isLoadingCart,
    isFetching: isFetchingCart,
  } = useGetCartItemsQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });

  if (isLoadingCart) {
    return <Skeleton className="h-[400px] w-full rounded-xl" />;
  }

  if (!cartItems) {
    return null;
  }

  return (
    <div className={clsx('', className)} data-testid="cart">
      <CartHeader className="my-8" length={cartItems.length} />
      <div className="flex gap-x-4">
        <CartBody items={cartItems} className="flex-[2]" />
        <CartSummary
          items={cartItems.filter((item) => item.isSelected)}
          isLoading={isFetchingCart}
        />
      </div>
    </div>
  );
};
