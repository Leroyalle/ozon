import type { FC } from 'react';
import { Product } from '../../features/catalog/types';
import { Card, CardBody, CardFooter } from '@heroui/react';

interface Props {
  item: Product;
  className?: string;
}

export const ProductItem: FC<Props> = ({ item, className }) => {
  return (
    <Card className={className} isPressable shadow="sm" onPress={() => console.log('item pressed')}>
      <CardBody className="overflow-visible p-0"></CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
      </CardFooter>
    </Card>
  );
};
