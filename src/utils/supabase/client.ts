// utils/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

// Configura tu Supabase URL y la clave pública (anon key)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Crea una instancia de Supabase para el cliente (navegador)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
