import type { FC } from 'react';
import { ProductWithItems } from '../../features/catalog/types';
import { Card, CardBody, CardFooter, Image } from '@heroui/react';

interface Props {
  item: ProductWithItems;
  className?: string;
}

export const ProductItem: FC<Props> = ({ item, className }) => {
  return (
    <Card isPressable shadow="sm" onPress={() => console.log('item pressed')} className={className}>
      <CardBody className="overflow-visible p-0">
        <Image
          alt={item.name}
          className="w-full object-cover h-[140px]"
          radius="lg"
          shadow="sm"
          src={item.product_items[0].image}
          width="100%"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
        <p className="text-default-500">{item.product_items[0].price}</p>
      </CardFooter>
    </Card>
  );
};
