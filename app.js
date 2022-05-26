import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://unmmyxkyompirfmwqknb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVubW15eGt5b21waXJmbXdxa25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1MTEyNTYsImV4cCI6MTk2OTA4NzI1Nn0.eqdtqs5ga3wkF3qZObhdlHPj1UInqEAjj_lk1N3Gdi4"
const supabase = createClient(supabaseUrl, supabaseKey);


let { data, error } = await supabase
  .from('Database')
  .select('id')


console.log(data, error);

