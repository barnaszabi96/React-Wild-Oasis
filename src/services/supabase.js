import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vuhbqaqwpdvyvcfwdkat.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1aGJxYXF3cGR2eXZjZndka2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyMzc2MjksImV4cCI6MjAxMzgxMzYyOX0.lIlQbc7SocbCLHZ_MQXmtsqJM4g53nSfEOIuu-oaKZg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
