import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Icons } from './icons';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href='/' className={cn('text-5xl font-bold', className)}>
      <Icons.logo className='text-blue-600' />
    </Link>
  );
};

export default Logo;
