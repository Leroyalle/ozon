import { supabase } from '@/shared';
import { AddToCartParams, QuantityChangeParams } from '../types';

class CartService {
  public async addToCart(params: AddToCartParams) {
    const { data, error } = await supabase.from('cart_items').insert(params).select();

    if (error) {
      throw error;
    }

    return { data };
  }

  public async removeFromCart(id: string) {
    const { data, error } = await supabase.from('cart_items').delete().eq('id', id).select();

    if (error) {
      throw error;
    }

    return { data };
  }

  public async incrementQuantity({ id, quantity }: QuantityChangeParams) {
    const { data, error } = await supabase
      .from('cart_items')
      .update({ quantity: quantity + 1 })
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    return { data };
  }
  public async decrementQuantity({ id, quantity }: QuantityChangeParams) {
    const { data, error } = await supabase
      .from('cart_items')
      .update({ quantity: quantity - 1 || 1 })
      .eq('id', id)
      .select();

    if (error) {
      throw error;
    }

    return { data };
  }
}

export const cartService = new CartService();
