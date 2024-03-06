import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://mqeehkryssdpocbadokm.supabase.co'
const supabaseKey =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xZWVoa3J5c3NkcG9jYmFkb2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2ODY0MzQsImV4cCI6MjAyNTI2MjQzNH0.ycnGAe7F4lpehdYQEDyFSDavu6aJb7pp2BLF2ERSNHk'



export const supabase = createClient(supabaseUrl, supabaseKey)