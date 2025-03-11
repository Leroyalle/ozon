import { useGetProductsQuery } from '@/entities';
import { useDebounceValue } from '@/shared';

export const useSearchProducts = (query: string) => {
  const debouncedValue = useDebounceValue<string>(query, [query]);
  const { data: products } = useGetProductsQuery({ name: debouncedValue });

  return { data: products };
};
