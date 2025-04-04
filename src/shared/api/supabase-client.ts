import { createClient } from '@supabase/supabase-js';
import { API_KEY, API_URL } from '../constants/environment';
import { Database } from '../types/supabase';

export const supabase = createClient<Database>(API_URL, API_KEY, {
  auth: {
    persistSession: true,
  },
});
