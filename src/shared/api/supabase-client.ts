import { createClient } from '@supabase/supabase-js';
import { API_KEY, API_URL } from '../constants/environment';

export const supabase = createClient(API_URL, API_KEY);
