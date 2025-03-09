import type { FC } from 'react';
import { ProductList } from '../components';
import { useGetProductsQuery } from '../api';

interface Props {
  className?: string;
}

export const Catalog: FC<Props> = ({ className }) => {
  const { data: products } = useGetProductsQuery();

  return (
    <section className={className}>
      <h2 className="sr-only">Catalog</h2>
      <ProductList items={products} />
    </section>
  );
};
