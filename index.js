import express
    from "express";
import { getJoke,insertJoke, upvoteJoke,downvoteJoke} from "./utils.js";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://unmmyxkyompirfmwqknb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVubW15eGt5b21waXJmbXdxa25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1MTEyNTYsImV4cCI6MTk2OTA4NzI1Nn0.eqdtqs5ga3wkF3qZObhdlHPj1UInqEAjj_lk1N3Gdi4"
const supabase = createClient(supabaseUrl, supabaseKey);
const app = express()
const port = 3000

 app.get('/',async (req, res) => {
     const jokes =  await getJoke();

     const joke1 = jokes.joke;
    await insertJoke(joke1);


  res.send('Hello World!')
 })
app.get('/upvote',async (req, res) => {
     const jokes =  await getJoke();

     const joke1 = jokes.joke;
    await upvoteJoke(joke1);


  res.send(`new value ${11}`)
})
app.get('/downvote',async (req, res) => {
     const jokes =  await getJoke();

     const joke1 = jokes.joke;
    await downvoteJoke(joke1);


    res.send(`new value ${1}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



 
 