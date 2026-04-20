import './tokens.css';
import './Button.css';

/**
 * Button
 *
 * Implements the #Button component set from the Figma Design System file.
 * Matches the five variant properties: Size, Style, Label Type, Enabled, Destructive.
 *
 * Figma source: https://www.figma.com/design/xfZ4IT0JiKhzNZzO2mtAVV/Design-System?node-id=33-3048
 */
export const Button = ({
  children,
  size = 'small',
  variant = 'prominent',
  destructive = false,
  disabled = false,
  leading,
  trailing,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
  ...rest
}) => {
  // Symbol = icon only button (no text label)
  const isSymbol = !children && (leading || trailing);

  const classes = [
    'ds-btn',
    `ds-btn--${size}`,
    `ds-btn--${variant}`,
    destructive && 'ds-btn--destructive',
    isSymbol && 'ds-btn--symbol',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      {...rest}
    >
      {leading && <span className="ds-btn__icon ds-btn__icon--leading">{leading}</span>}
      {children && <span className="ds-btn__label">{children}</span>}
      {trailing && <span className="ds-btn__icon ds-btn__icon--trailing">{trailing}</span>}
    </button>
  );
};
