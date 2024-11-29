import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers like toBeInTheDocument

import { Button } from './Button';

 // Your component

describe('Button Component', () => {
  test('renders button with label', () => {
    render(<Button label='test'/>);
    
    const buttonElement = screen.getByText('test');
    expect(buttonElement).toBeInTheDocument();  // Now works properly
  });
})