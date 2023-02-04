import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import DismissableBlurb from './DismissableBlurb';

describe("DismissableBlurb", () => {

   it("should render a modal with a header, a link and a content", () => {
      render(<DismissableBlurb header="Title" link="Click Me">
         <p>This is the content</p>
      </DismissableBlurb>);
      const header = screen.getByText('Title');
      const link = screen.getByText('Click Me').closest('a');
      const childrenContent = screen.getByText('This is the content');
      expect(header).toBeInTheDocument();
      expect(link).toBeInTheDocument();
      expect(childrenContent).toBeInTheDocument();
   });
})
