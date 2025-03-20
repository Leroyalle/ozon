import type { FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  image: string;
  className?: string;
}

export const MediaGallery: FC<Props> = ({ image, className }) => {
  return (
    <div className={clsx('max-w-[300px]', className)} data-testid="mediaGallery">
      <img className="w-full h-full" src={image} alt="" />
    </div>
  );
};
