import { Button } from './components/Button';
import { ChevronRight } from './components/Button/icons';

export default function App() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        color: '#111',
        background: '#f7f7f8',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 520, textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
          Fintech Button Library
        </h1>
        <p style={{ fontSize: 15, color: '#555', marginBottom: 24, lineHeight: 1.5 }}>
          A Button component traced 1:1 from a Figma design system, built with React and Storybook.
          Run <code>npm run storybook</code> to see the full component catalog.
        </p>
        <Button variant="prominent" size="large" trailing={<ChevronRight />}>
          Open Storybook
        </Button>
      </div>
    </main>
  );
}
