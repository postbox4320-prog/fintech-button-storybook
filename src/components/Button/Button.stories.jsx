import { Button } from './Button';
import {
  ChevronRight,
  ChevronLeft,
  Plus,
  Download,
  Trash,
  ArrowRight,
} from './icons';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button component from the Design System Figma file. ' +
          'Mirrors the five variant properties: Size, Style, Label Type, Enabled, Destructive.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: [
        'prominent',
        'bordered',
        'secondary',
        'borderless',
        'outline',
        'outlineSecondary',
      ],
    },
    destructive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
    leading: { table: { disable: true } },
    trailing: { table: { disable: true } },
  },
  args: {
    children: 'Action',
    size: 'small',
    variant: 'prominent',
    destructive: false,
    disabled: false,
  },
};

/* -----------------------------------------------------------
   Default (playground)
   ----------------------------------------------------------- */
export const Playground = {};

/* -----------------------------------------------------------
   Styles
   ----------------------------------------------------------- */
export const Prominent = {
  args: { variant: 'prominent', children: 'Continue' },
};

export const Bordered = {
  args: { variant: 'bordered', children: 'Continue' },
};

export const BorderedSecondary = {
  args: { variant: 'secondary', children: 'Cancel' },
};

export const Borderless = {
  args: { variant: 'borderless', children: 'Skip for now' },
};

export const Outline = {
  args: { variant: 'outline', children: 'More options' },
};

export const OutlineSecondary = {
  args: { variant: 'outlineSecondary', children: 'More options' },
};

/* -----------------------------------------------------------
   Sizes
   ----------------------------------------------------------- */
export const Sizes = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button {...args} size="small">Small</Button>
      <Button {...args} size="medium">Medium</Button>
      <Button {...args} size="large">Large</Button>
    </div>
  ),
};

/* -----------------------------------------------------------
   Label Types
   ----------------------------------------------------------- */
export const LabelTypes = {
  name: 'Label Types',
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args}>Text</Button>
      <Button {...args} leading={<Plus />}>Leading</Button>
      <Button {...args} trailing={<ChevronRight />}>Trailing</Button>
      <Button {...args} leading={<ChevronLeft />} trailing={<ChevronRight />}>Both</Button>
      <Button {...args} aria-label="Add" leading={<Plus />} />
    </div>
  ),
};

/* -----------------------------------------------------------
   Destructive
   ----------------------------------------------------------- */
export const Destructive = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} destructive variant="prominent" leading={<Trash />}>Delete account</Button>
      <Button {...args} destructive variant="bordered">Delete</Button>
      <Button {...args} destructive variant="borderless">Remove</Button>
      <Button {...args} destructive variant="outline">Cancel transaction</Button>
    </div>
  ),
};

/* -----------------------------------------------------------
   Disabled
   ----------------------------------------------------------- */
export const Disabled = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <Button {...args} disabled variant="prominent">Continue</Button>
      <Button {...args} disabled variant="bordered">Continue</Button>
      <Button {...args} disabled variant="outline">Continue</Button>
      <Button {...args} disabled variant="borderless">Continue</Button>
    </div>
  ),
};

/* -----------------------------------------------------------
   Full variant matrix (all Styles across all Sizes)
   ----------------------------------------------------------- */
const STYLES = [
  { key: 'prominent', label: 'Prominent' },
  { key: 'bordered', label: 'Bordered' },
  { key: 'secondary', label: 'Bordered — Secondary' },
  { key: 'borderless', label: 'Borderless' },
  { key: 'outline', label: 'Outline' },
  { key: 'outlineSecondary', label: 'Outline — Secondary' },
];

const SIZES = ['small', 'medium', 'large'];

export const AllVariants = {
  name: 'All Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 24, fontFamily: 'Inter, sans-serif' }}>
      {STYLES.map(({ key, label }) => (
        <section key={key}>
          <h3
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'rgba(0,0,0,0.6)',
              textTransform: 'uppercase',
              letterSpacing: 0.4,
              marginBottom: 12,
            }}
          >
            {label}
          </h3>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            {SIZES.map((size) => (
              <Button key={size} variant={key} size={size} leading={<Plus />}>
                Action
              </Button>
            ))}
            <Button variant={key} size="medium" disabled>Disabled</Button>
            <Button variant={key} size="medium" destructive trailing={<ArrowRight />}>
              Destructive
            </Button>
          </div>
        </section>
      ))}
    </div>
  ),
};

/* -----------------------------------------------------------
   Fintech examples — shows the component in realistic product use
   ----------------------------------------------------------- */
export const FintechExamples = {
  name: 'Fintech Examples',
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
      <Button variant="prominent" size="large">Pay ₹1,240</Button>
      <Button variant="bordered" size="medium" trailing={<ChevronRight />}>
        Add new beneficiary
      </Button>
      <Button variant="outline" size="medium" leading={<Download />}>
        Download statement
      </Button>
      <Button variant="borderless" size="small">View all transactions</Button>
      <Button variant="prominent" size="medium" destructive leading={<Trash />}>
        Cancel transaction
      </Button>
    </div>
  ),
};
