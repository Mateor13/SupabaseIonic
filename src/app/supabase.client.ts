import {createClient} from '@supabase/supabase-js'

const supabaseUrl = credenciales;
const supabaseKey = 'credenciales';
export const supabase = createClient(supabaseUrl, supabaseKey)