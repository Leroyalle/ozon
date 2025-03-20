import { CartItemWithRelations } from '@/features';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Slice {
  totalAmount: number;
  items: CartItemWithRelations[];
}

const initialState: Slice = {
  totalAmount: 0,
  items: [],
};

const cartSummarySlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<CartItemWithRelations>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);
      if (findItem) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    setItems: (state, action: PayloadAction<CartItemWithRelations[]>) => {
      state.items = action.payload;
    },
    clearAll: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { toggleItem, setItems, clearAll } = cartSummarySlice.actions;

export default cartSummarySlice.reducer;
