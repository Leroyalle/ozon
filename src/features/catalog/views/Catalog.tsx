import type { FC } from 'react';
import { Categories, ProductList } from '../components';
import { useGetProductsQuery } from '../api';
import { useGetCategoriesQuery } from '../api/categories-api';

interface Props {
  className?: string;
}

export const Catalog: FC<Props> = ({ className }) => {
  const { data: categories } = useGetCategoriesQuery();
  const { data: products } = useGetProductsQuery();

  return (
    <section className={className}>
      <h2 className="sr-only">Catalog</h2>
      <Categories items={categories} />
      <ProductList items={products} />
    </section>
  );
};
