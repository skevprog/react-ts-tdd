import { describe, expect, it, beforeEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import SimpsonsQuotes from './SimpsonsQuotes';
import { mockQuotes } from '../mocks/quotes-mocks';

describe('SimpsonsQuotes component', () => {
   beforeEach(() => {
      cleanup();
   });

   it('should display title', () => {
      render (<SimpsonsQuotes/>);

      expect(screen.getByRole('heading', { name: /The Simpsons Quotes/ })).toBeInTheDocument();
   })

   it('should display dinamically the expected quotes', async () => {
      render(<SimpsonsQuotes />);

      expect(await screen.findAllByRole('listitem')).toHaveLength(3);

      const [first, second, third] = screen.getAllByRole('listitem');

      expect(first).toHaveTextContent(mockQuotes[0].quote)
      expect(second).toHaveTextContent(mockQuotes[1].quote)
      expect(third).toHaveTextContent(mockQuotes[2].quote)
   })
})
