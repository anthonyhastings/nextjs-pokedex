import Decimal from 'decimal.js-light';

const downwardStep = 0.5;

// Media queries declarations do not base themselves on the declared font-size
// that you apply to html and instead always use the default size of 16px.
const unit = 'px';

const breakpoints = new Map([
  ['xs', 0], // Phone.
  ['sm', 600], // Tablet.
  ['md', 900], // Small laptop.
  ['lg', 1200], // Desktop.
  ['xl', 1536], // Large screen.
]);

export const down = (breakpointKey) => {
  const value = breakpoints.get(breakpointKey);
  const steppedValue = new Decimal(value).minus(downwardStep).toNumber();

  return `@media (max-width: ${steppedValue}${unit})`;
};

export const up = (breakpointKey) => {
  const value = breakpoints.get(breakpointKey);

  return `@media (min-width: ${value}${unit})`;
};
