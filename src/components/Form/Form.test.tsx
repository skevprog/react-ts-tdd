import { describe, expect, it, beforeEach } from 'vitest';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
   beforeEach(() => {
      cleanup();
   });

   it('Should render a form element', () => {
      render(<Form />)
      const form = document.querySelector(
         'form'
      ) as HTMLFormElement | null;
      expect(form).toBeInTheDocument();
   })

   it('Should render a form element with an input element', () => {
      render(<Form />)
      const form = document.querySelector(
         'form'
      ) as HTMLFormElement | null;
      const input = document.querySelector('input') as HTMLInputElement | null;
      expect(form).toBeInTheDocument();
      expect(input).toBeInTheDocument();
   })

   it('Should render input element with textContent', () => {
      render(<Form />)
      const form = document.querySelector(
         'form'
      ) as HTMLFormElement | null;
      const input = document.querySelector('input') as HTMLInputElement | null; ``
      expect(form).toBeInTheDocument();
      expect(input).toBeInTheDocument();

      input!.textContent = 'JohnDoe@email.com';
      expect(input?.textContent).toBe('JohnDoe@email.com')

   })

   it('Check input field and its props', () => {
      render(<Form />)
      const input = document.querySelector('input') as HTMLInputElement | null;
      expect(input).toBeInTheDocument();

      expect(input!.type).toBe('email');
      expect(input!.name).toBe('email');

      fireEvent.change(input!, {
         target: {
            value: 'test@test.com'
         }
      })

      expect(input!.value).toBe('test@test.com')
      expect(input).toBeRequired();
   })

})
