import { pluralValues } from '@/features/cart/constants';
import { getPluralValues } from '@/shared';
import type { FC } from 'react';

interface Props {
  totalCount: number;
  totalAmount: number;
  discountAmount: number;
  className?: string;
}

export const CartSummaryDetails: FC<Props> = ({
  totalCount,
  totalAmount,
  discountAmount,
  className,
}) => {
  return (
    <div className={className} data-testid="cartSummaryDetails">
      <dl>
        <div className="flex items-center justify-between">
          <dt className="text-xl font-semibold">Ваша корзина:</dt>
          <dd>
            {totalCount} {getPluralValues(totalCount, pluralValues)}
          </dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="font-light text-foreground/80">Товары</dt>
          <dd>{totalAmount} ₽</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="font-light text-foreground/80">Скидка</dt>
          <dd className="text-danger">- {discountAmount} ₽</dd>
        </div>
      </dl>
    </div>
  );
};
