// Load Inter once per session
if (typeof document !== 'undefined' && !document.getElementById('inter-font')) {
  const link = document.createElement('link');
  link.id = 'inter-font';
  link.rel = 'stylesheet';
  link.href =
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  document.head.appendChild(link);
  document.body.style.fontFamily =
    "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
}

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'grouped', value: '#f2f2f7' },
        { name: 'dark', value: '#1c1c1e' },
      ],
    },
  },
};

export default preview;
