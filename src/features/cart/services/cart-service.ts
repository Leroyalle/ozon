import { supabase } from '@/shared';
import { AddToCartParams } from '../types';

class CartService {
  public async addToCart(params: AddToCartParams) {
    const { data, error } = await supabase.from('cart_items').insert(params);

    if (error) {
      throw error;
    }

    return { data };
  }
}

export const cartService = new CartService();
