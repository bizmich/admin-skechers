import { cn } from '@/lib/utils';

const NoFound = ({
  className,
  description,
  title,
}: {
  className?: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        'mx-auto flex max-w-xl text-balance flex-col space-y-1.5',
        className
      )}
    >
      <h1 className='text-center text-2xl font-bold'>{title}</h1>
      <p className='text-center text-muted-foreground'>{description}</p>
    </div>
  );
};

export default NoFound;
