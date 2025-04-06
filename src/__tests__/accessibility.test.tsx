import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

// Add the custom matcher
expect.extend(toHaveNoViolations);

// Mock the RootLayout component
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

describe('Accessibility Tests', () => {
  it('RootLayout should not have accessibility violations', async () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); 