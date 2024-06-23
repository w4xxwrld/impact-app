import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://psmholpmviufdgoupupk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbWhvbHBtdml1ZmRnb3VwdXBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwNTg0NzAsImV4cCI6MjAzNDYzNDQ3MH0.h5l61S4aYE1EpvCrP7eamwg0f8QCiMSL07l0o5r2j_0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})