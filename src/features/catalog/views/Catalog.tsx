import type { FC } from 'react';
import { Categories, ProductList } from '../components';
import { useGetProducts } from '../hooks';
import { useGetCategoriesQuery } from '../api';

interface Props {
  className?: string;
}

export const Catalog: FC<Props> = ({ className }) => {
  const { data: categories, isLoading: isLoadingCategories } = useGetCategoriesQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });
  const { data: products, setSearchParams, isLoading: isLoadingProducts } = useGetProducts();

  return (
    <section className={className}>
      <h2 className="sr-only">Catalog</h2>
      <Categories items={categories} isLoading={isLoadingCategories} onChange={setSearchParams} />
      <ProductList items={products} isLoading={isLoadingProducts} className="mt-2" />
    </section>
  );
};
