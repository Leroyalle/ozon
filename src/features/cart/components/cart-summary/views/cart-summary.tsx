import type { FC } from 'react';
import { clsx } from 'clsx';
import { Surface } from '@/shared';
import { Button } from '@heroui/button';
import { CartItemWithRelations } from '@/features/cart/types';
import { calcTotalAmount } from '@/features/cart/lib';
import { CartSummaryDetails, EmptyState } from '../components';
import { Spinner } from '@heroui/react';

interface Props {
  items: CartItemWithRelations[];
  isLoading: boolean;
  className?: string;
}

export const CartSummary: FC<Props> = ({ items, isLoading, className }) => {
  const hasItems = items.length > 0;
  const { totalAmount, discountAmount } = calcTotalAmount(items, 0.1);

  return (
    <Surface
      className={clsx(
        'flex-1 relative',
        !hasItems && 'pointer-events-none opacity-60',
        isLoading && 'pointer-events-none opacity-60 ',
        className,
      )}
      data-testid="cartSummary">
      {isLoading && (
        <Spinner
          variant="dots"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <Button
        color={hasItems ? 'success' : 'default'}
        size="lg"
        fullWidth
        disabled={!hasItems}
        onPress={() => alert('Переход к оформлению')}
        data-testid="checkoutButton">
        Перейти к оформлению
      </Button>
      <hr className="border-t border-gray-300 my-4" />
      {hasItems ? (
        <CartSummaryDetails
          totalCount={items.length}
          totalAmount={totalAmount}
          discountAmount={discountAmount}
        />
      ) : (
        <EmptyState />
      )}
    </Surface>
  );
};
