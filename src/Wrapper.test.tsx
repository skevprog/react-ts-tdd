import { describe, expect, it, } from 'vitest';
import { render, screen } from '@testing-library/react';

import Avatar from './Avatar';


describe('Wrapper', () => {
   it("should render a caption and an image", () => {
      const cap = 'a beatiful cat';
      render(<Wrapper><Avatar /></Wrapper>)
      const img = screen.getByAltText(alt)
      const caption = screen.getByText(cap)
      expect(img).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
   })
});
