import HomePage from '@/app/page';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Mock the redirect function from next/navigation
const mockRedirect = jest.fn();
jest.mock('next/navigation', () => ({
  redirect: (path: string) => mockRedirect(path),
}));

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('redirects to Hebrew version by default', () => {
    render(<HomePage />);
    
    // Should call redirect with '/he'
    expect(mockRedirect).toHaveBeenCalledWith('/he');
  });

  it('renders loading spinner while redirecting', () => {
    const { container } = render(<HomePage />);
    
    // Check if the loading spinner is rendered
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });
}); 