import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import React from 'react';

const headingVariants = cva('tracking-tight scroll-m-20', {
  variants: {
    variant: {
      h1: ' text-4xl font-extrabold lg:text-5xl',
      h2: 'text-3xl font-semibold ',
      h3: 'text-2xl font-semibold ',
    },
  },
  defaultVariants: {
    variant: 'h2',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: React.ElementType;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, as, ...props }, ref) => {
    const Comp = as ? as : 'h2';
    return (
      <Comp
        className={cn(headingVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
