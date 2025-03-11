import type { FC } from 'react';
import { Categories, ProductList } from '../components';
import { useGetProducts } from '../hooks';
import { useGetCategoriesQuery } from '../api';

interface Props {
  className?: string;
}

export const Catalog: FC<Props> = ({ className }) => {
  const { data: categories } = useGetCategoriesQuery();
  const { data: products, setSearchParams } = useGetProducts();

  return (
    <section className={className}>
      <h2 className="sr-only">Catalog</h2>
      <Categories items={categories} onChange={setSearchParams} />
      <ProductList items={products} className="mt-2" />
    </section>
  );
};
