import type { FC } from 'react';
import { clsx } from 'clsx';
import { TProductItem } from '@/entities';

interface Props {
  items: TProductItem[];
  className?: string;
}

export const MediaGallery: FC<Props> = ({ items, className }) => {
  return (
    <div className={clsx('max-w-[300px]', className)}>
      <img className="w-full h-full" src={items[0].image} alt="" />
    </div>
  );
};
