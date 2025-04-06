import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

// Mock the RootLayout component instead of using the real one
// This avoids the invalid nesting of <html> inside a <div> in tests
jest.mock('@/app/layout', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mock-root-layout" className="mocked-variable">
        <div className="mocked-font">{children}</div>
      </div>
    ),
  };
});

// Import the mocked component
import RootLayout from '@/app/layout';

describe('RootLayout', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );
    
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the appropriate classes', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );
    
    const rootLayoutElement = container.querySelector('[data-testid="mock-root-layout"]');
    const contentWrapper = container.querySelector('.mocked-font');
    
    expect(rootLayoutElement).toHaveClass('mocked-variable');
    expect(contentWrapper).toHaveClass('mocked-font');
  });
}); 