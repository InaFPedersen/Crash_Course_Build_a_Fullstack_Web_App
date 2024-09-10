import { createClient } from '@supabase/supabase-js';

// const SUPABASE_URL = '';
// const SUPABASE_KEY = '';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
  // SUPABASE_URL,
  // SUPABASE_KEY
);

export default supabase;
