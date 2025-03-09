import { supabase } from '@/shared';

class CategoriesService {
  public async getCategories() {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) {
      throw { error };
    }

    return { data };
  }
}

export const categoriesService = new CategoriesService();
