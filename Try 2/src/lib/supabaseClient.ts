import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://mtchzhxcurpbhyccekpc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10Y2h6aHhjdXJwYmh5Y2Nla3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTMwODUsImV4cCI6MjA1NzQ2OTA4NX0.6aD0e9qivOwHdgHZFCZNArAQus1ElFStBqeTRvvv2Iw'
)
