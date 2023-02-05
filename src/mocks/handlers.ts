import { rest } from 'msw';

import { mockQuotes } from './quotes-mocks';

export const handlers = [
   rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req, res, ctx) => {
      const mockQuotesQuantity = 3;
      req.params.q = `count=${mockQuotesQuantity}`;
      mockQuotes.splice(mockQuotesQuantity);
      return res(
         ctx.status(200),
         ctx.json(mockQuotes)
      )
   })
]
