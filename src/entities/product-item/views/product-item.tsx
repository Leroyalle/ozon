import type { FC } from 'react';
import { Card, CardBody, CardFooter, Image } from '@heroui/react';
import { ProductItemWithProduct } from '../types';
import { Link } from 'react-router-dom';

interface Props {
  item: ProductItemWithProduct;
  className?: string;
}

export const ProductItem: FC<Props> = ({ item, className }) => {
  return (
    <Card isPressable shadow="sm" className={className} data-testid="product-item">
      <Link to={`/product/${item.id}`} className="w-full h-full block">
        <CardBody className="overflow-visible p-0">
          <Image
            alt={item.products.name}
            className="w-full object-cover h-[140px]"
            radius="lg"
            shadow="sm"
            src={item.image}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b data-testid="product-item-name">{item.products.name}</b>
          <p className="text-default-500">{item.price}</p>
        </CardFooter>
      </Link>
    </Card>
  );
};
