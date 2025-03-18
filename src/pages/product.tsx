import { Product, useGetProductQuery } from '@/entities';
import { useParams } from 'react-router-dom';

export function ProductPage() {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading } = useGetProductQuery(id, {
    skip: !id,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main data-testid="productPage">
      <Product item={data} />
    </main>
  );
}
