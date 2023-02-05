import React, { useEffect, useState } from 'react'

export type Quote = {
   quote: string;
   character: string;
   image: string;
   characterDirection: string;
}


const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=3';

function SimpsonsQuotes() {
   const [quotes, setQuotes] = useState<Quote[]>([]);

   useEffect(() => {
      async function fetchQuotes() {
         try {
            const res = await fetch(URL);
            const simpsonQuotes = await res.json();
            setQuotes(simpsonQuotes);
         } catch(err) {
            console.error(err);
         }
      }
      fetchQuotes();
   }, []);

   return (
      <>
         <h1>The Simpsons Quotes</h1>
         {quotes.length > 0 ?
            <ul>
               {quotes.map(({ quote }) => (
               <li key={quote} role="listitem">
                  {quote}
               </li>
            ))}
            </ul>
            :
            null
         }
      </>
   )
}

export default SimpsonsQuotes;
