import { supabase } from '@/shared';

class UserService {
  public async getSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      throw error;
    }

    return { data };
  }
}

export const userService = new UserService();
