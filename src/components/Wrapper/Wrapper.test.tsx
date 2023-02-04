import { describe, expect, it, } from 'vitest';
import { render, screen } from '@testing-library/react';


import Wrapper from './Wrapper';
import Avatar from '../Avatar/Avatar';


describe('Wrapper', () => {
   it("should render a caption and an image", () => {
      const cap = 'a beatiful cat';
      const alt = '@github-handle'
      render(
         <Wrapper caption={cap}>
            <Avatar alt={alt} />
         </Wrapper>
      )
      const img = screen.getByAltText(alt)
      const caption = screen.getByText(cap)
      expect(img).toBeInTheDocument();
      expect(caption).toBeInTheDocument();
   })
});
