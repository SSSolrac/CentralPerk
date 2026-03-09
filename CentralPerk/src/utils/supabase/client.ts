import { createClient } from '@supabase/supabase-js';
import { projectId as fallbackProjectId, publicAnonKey as fallbackAnonKey } from '/utils/supabase/info';

const envSupabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const envAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY?.trim();

const supabaseUrl = envSupabaseUrl || `https://${fallbackProjectId}.supabase.co`;
const supabaseAnonKey = envAnonKey || fallbackAnonKey;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase configuration is missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or restore utils/supabase/info.tsx).'
  );
}

// Create a singleton Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
