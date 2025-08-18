import { ProductPriceRange } from '@/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPriceRange(
  priceRange: ProductPriceRange,
  currencySymbol = '$'
): string {
  const { min, max } = priceRange;

  const format = (amount: number) => `${amount.toFixed(2)}${currencySymbol}`;

  // Both zero
  if (min === 0 && max === 0) return 'Free';

  // One valid
  if (min === 0) return format(max);
  if (max === 0) return format(min);

  // Both same
  if (min === max) return format(min);

  // Normal range
  return `${format(min)} - ${format(max)}`;
}
