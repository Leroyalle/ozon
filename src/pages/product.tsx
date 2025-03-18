import { Product, useGetProductQuery, useGetSessionQuery } from '@/entities';
import { useParams } from 'react-router-dom';

export function ProductPage() {
  const { id } = useParams();
  const { data: session } = useGetSessionQuery();
  console.log(id);
  const { data, isLoading } = useGetProductQuery(
    { id, user_id: session?.session?.user.id },
    {
      skip: !id || !session?.session?.user.id,
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main data-testid="productPage">
      <Product item={data} />
    </main>
  );
}
