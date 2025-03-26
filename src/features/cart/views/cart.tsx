import type { FC } from 'react';
import { clsx } from 'clsx';
import { useGetCartItemsQuery } from '../api';
import { CartBody, CartHeader, CartSummary } from '../components';

interface Props {
  className?: string;
}

export const Cart: FC<Props> = ({ className }) => {
  const { data: cartItems, isFetching: isLoadingCart } = useGetCartItemsQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });

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
          isLoading={isLoadingCart}
        />
      </div>
    </div>
  );
};
