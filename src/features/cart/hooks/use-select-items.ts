import { useCallback, useEffect } from 'react';
import { CartItemWithRelations } from '../types';
import { useAppDispatch, useAppSelector } from '@/shared/store/store';
import { clearAll, setItems } from '../store/slice';

export const useSelectItems = (initialItems: CartItemWithRelations[]) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cartSummarySlice.items);

  useEffect(() => {
    dispatch(setItems(initialItems));
  }, []);

  const onSelectAll = useCallback(() => {
    if (items.length === 0) {
      dispatch(setItems(initialItems));
    } else {
      dispatch(clearAll());
    }
  }, [items]);

  return { onSelectAll };
};
