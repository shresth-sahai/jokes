import fetch from "node-fetch";
 import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://unmmyxkyompirfmwqknb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVubW15eGt5b21waXJmbXdxa25iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM1MTEyNTYsImV4cCI6MTk2OTA4NzI1Nn0.eqdtqs5ga3wkF3qZObhdlHPj1UInqEAjj_lk1N3Gdi4"
export const supabase = createClient(supabaseUrl, supabaseKey);


export async function getJoke() {
 const jokeData = await fetch('https://icanhazdadjoke.com/', {
    headers:{
     'Accept': 'application/json'
  }
   });
   const jokeObj = await jokeData.json();
  // jokeDiv.innerHTML = jokeObj.joke;
   //console.log(jokeObj);
    return jokeObj;
 }
export async function insertJoke(joke1){
 const { data, error } = await supabase
  .from('Database')
  .insert([
    { joke:joke1,id:"091619cf-aedd-469e-9860-c370bec15468" }
  ])
    console.log(data, error);
   //console.log(jokeObj);
}
 export async function upvoteJoke(){
     const { data, error } = await supabase.rpc('increment', { id: "091619cf-aedd-469e-9860-c370bec15469" })
     console.log(data)
     console.log(error)
     return data
 }

 export async function downvoteJoke(){
     const { data, error } = await supabase.rpc('decrement', { id: "091619cf-aedd-469e-9860-c370bec15469" })
     console.log(data)
     console.log(error)
     return data
 }


