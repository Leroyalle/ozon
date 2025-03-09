import { useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '../api';

export const useGetProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: products } = useGetProductsQuery(searchParams.get('category') || '', {
    refetchOnMountOrArgChange: true,
  });

  return { data: products, setSearchParams };
};
