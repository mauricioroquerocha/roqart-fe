// components/ui/typography.tsx
import { cn } from '@/lib/utils';
import React from 'react';

export function TypographyH1({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={cn('font-bold text-4xl', className)} {...props} />;
}

export function TypographyH2({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={cn('font-light text-3xl', className)} {...props} />;
}

export function TypographyH3({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('text-base font-bold', className)} {...props} />;
}

export function TypographyH4({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={cn('text-sm font-normal', className)} {...props} />;
}

export function TypographyP({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  );
}

export function TypographyBlockquote({
  className,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  );
}
