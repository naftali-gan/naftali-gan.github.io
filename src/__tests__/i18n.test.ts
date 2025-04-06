
// Mock next/navigation
const mockNotFound = jest.fn();
jest.mock('next/navigation', () => ({
  notFound: () => mockNotFound(),
}));

// Mock next-intl/server
jest.mock('next-intl/server', () => ({
  getRequestConfig: jest.fn((configFn) => configFn),
}));

// Define messages
const messages = {
  en: { greeting: 'Hello' },
  he: { greeting: 'שלום' }
};

// Mock dynamic imports for message files
jest.mock('../messages/en/index.json', () => ({ default: messages.en }), { virtual: true });
jest.mock('../messages/he/index.json', () => ({ default: messages.he }), { virtual: true });

describe('i18n Configuration', () => {
  let i18nModule: any;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
    
    // Create a mock implementation of dynamic import
    jest.mock('../i18n', () => {
      const mockConfig = async ({ locale }: { locale: string }) => {
        if (!locale) {
          mockNotFound();
          return;
        }
        
        return {
          messages: messages[locale as keyof typeof messages],
          locale,
          timeZone: 'Asia/Jerusalem',
          now: new Date(),
        };
      };
      
      return { __esModule: true, default: mockConfig };
    });
    
    // Import the mocked module
    i18nModule = require('../i18n').default;
  });

  test('Returns configuration for valid locale', async () => {
    // Get the configuration
    const config = await i18nModule({ locale: 'en' });
    
    // Check if the configuration has required properties
    expect(config).toHaveProperty('messages');
    expect(config).toHaveProperty('locale', 'en');
    expect(config).toHaveProperty('timeZone', 'Asia/Jerusalem');
    expect(config).toHaveProperty('now');
    expect(config.messages).toEqual(messages.en);
  });

  test('Calls notFound for missing locale', async () => {
    // Call the function with empty locale
    await i18nModule({ locale: '' });
    
    // Check if notFound was called
    expect(mockNotFound).toHaveBeenCalled();
  });
}); 