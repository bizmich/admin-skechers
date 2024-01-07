import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { Heading } from './ui/heading';

export interface ULProps extends React.ParamHTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Container = forwardRef<HTMLDivElement, ULProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn('container space-y-8', className)}>
        {children}
      </div>
    );
  }
);

const ContainerTitle = forwardRef<HTMLDivElement, ULProps>(
  ({ children, className }, ref) => {
    return (
      <Heading as='h2' ref={ref} className={cn('text', className)}>
        {children}
      </Heading>
    );
  }
);
const ContainerFilters = forwardRef<HTMLDivElement, ULProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-5 rounded-xl w-full bg-secondary', className)}
      >
        {children}
      </div>
    );
  }
);
const ContainerContent = forwardRef<HTMLDivElement, ULProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn('', className)}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
ContainerTitle.displayName = 'ContainerTitle';
ContainerFilters.displayName = 'ContainerFilters';
ContainerContent.displayName = 'ContainerContent';

export { Container, ContainerTitle, ContainerFilters, ContainerContent };
