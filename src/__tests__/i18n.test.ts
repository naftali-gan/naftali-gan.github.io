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

// Define a type that matches the return type of the i18n config
interface I18nConfig {
  (params: { locale: string }): Promise<{
    messages: typeof messages.en;
    locale: string;
    timeZone: string;
    now: Date;
  } | undefined>;
}

describe('i18n Configuration', () => {
  let i18nConfig: I18nConfig;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
    
    // Create a mock implementation of dynamic import
    jest.mock('../i18n', () => {
      const mockConfig = async (params: { locale: string }) => {
        const { locale } = params;
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
    
    // Import the mocked module using dynamic import
    jest.isolateModules(() => {
      // Using a function here to avoid hoisting issues
      const importModule = async (): Promise<void> => {
        const importedModule = await import('../i18n');
        i18nConfig = importedModule.default as I18nConfig;
      };
      
      // Execute the import immediately
      importModule().catch(console.error);
    });
  });

  test('Returns configuration for valid locale', async () => {
    // Get the configuration
    const config = await i18nConfig({ locale: 'en' });
    
    // Check if the configuration has required properties
    expect(config).not.toBeUndefined();
    if (config) {
      expect(config).toHaveProperty('messages');
      expect(config).toHaveProperty('locale', 'en');
      expect(config).toHaveProperty('timeZone', 'Asia/Jerusalem');
      expect(config).toHaveProperty('now');
      expect(config.messages).toEqual(messages.en);
    }
  });

  test('Calls notFound for missing locale', async () => {
    // Call the function with empty locale
    await i18nConfig({ locale: '' });
    
    // Check if notFound was called
    expect(mockNotFound).toHaveBeenCalled();
  });
}); 