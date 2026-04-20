/**
 * Minimal SVG icon set in the iOS-style stroke family used by the Figma
 * Design System. Uses `currentColor` so icons inherit the button's color.
 *
 * Swap these with real SVGs exported from the Figma file later via
 * Figma's "Copy as SVG" on any Icon/* component.
 */

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  xmlns: 'http://www.w3.org/2000/svg',
  width: '100%',
  height: '100%',
  'aria-hidden': true,
};

export const ChevronRight = () => (
  <svg {...iconProps}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const ChevronLeft = () => (
  <svg {...iconProps}>
    <path d="M15 6l-6 6 6 6" />
  </svg>
);

export const Plus = () => (
  <svg {...iconProps}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Download = () => (
  <svg {...iconProps}>
    <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
  </svg>
);

export const Trash = () => (
  <svg {...iconProps}>
    <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);

export const ArrowRight = () => (
  <svg {...iconProps}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);
