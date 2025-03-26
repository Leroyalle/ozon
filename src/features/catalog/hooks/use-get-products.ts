import { useSearchParams } from 'react-router-dom';
import { useGetProductsQuery } from '@/entities';

export const useGetProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: products, isLoading } = useGetProductsQuery(
    { categoryId: searchParams.get('category') },
    {
      refetchOnMountOrArgChange: false,
    },
  );

  return { data: products, setSearchParams, isLoading };
};
