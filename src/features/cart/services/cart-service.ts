import { supabase } from '@/shared';
import { AddToCartParams, QuantityChangeParams, ToggleSelectionParams } from '../types';

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

  public async incrementQuantity({
    cart_item_id,
    quantity,
  }: Omit<QuantityChangeParams, 'product_item_id'>) {
    const { data, error } = await supabase
      .from('cart_items')
      .update({ quantity: quantity + 1 })
      .eq('id', cart_item_id)
      .select();

    if (error) {
      throw error;
    }

    return { data };
  }

  public async decrementQuantity({
    cart_item_id,
    quantity,
  }: Omit<QuantityChangeParams, 'product_item_id'>) {
    const { data, error } = await supabase
      .from('cart_items')
      .update({ quantity: quantity - 1 || 1 })
      .eq('id', cart_item_id)
      .select();

    if (error) {
      throw error;
    }

    return { data };
  }

  public async getCartItems() {
    const { data, error } = await supabase
      .from('cart_items')
      .select(`*, product_items (*,products(*))`)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { data };
  }

  public async toggleCartItemSelection({ isSelected, cart_item_id }: ToggleSelectionParams) {
    const query = supabase.from('cart_items').update({ isSelected });

    if (cart_item_id) {
      query.eq('id', cart_item_id);
    } else {
      query.not('id', 'is', null);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    return { data };
  }
}

export const cartService = new CartService();
