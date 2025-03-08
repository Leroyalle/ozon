import type { FC } from 'react';
import { ProductList } from '../components';
import { Product } from '../types';

interface Props {
  className?: string;
}

export const Catalog: FC<Props> = ({ className }) => {
  const products: Product[] = [];

  return (
    <section className={className}>
      <h2 className="sr-only">Catalog</h2>
      <ProductList items={products} />
    </section>
  );
};
