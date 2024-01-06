import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qtxuyusgdeegplwsyppd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0eHV5dXNnZGVlZ3Bsd3N5cHBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyOTg2NTYsImV4cCI6MjAxNzg3NDY1Nn0.MPcWEUrkpUgquAU3mVOm-iYFePszClf0-IALkACaTv4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
