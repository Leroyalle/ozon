import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  image: string;
  className?: string;
}

export const CartItemImage: FC<Props> = ({ image, className }) => {
  return (
    <div className={clsx('max-w-[90px] rounded-xl overflow-hidden', className)}>
      <img src={image} alt="" className="w-full aspect-[1/1.2] object-cover" />
    </div>
  );
};
