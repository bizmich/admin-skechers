import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href='/' className={cn('text-5xl font-bold', className)}>
      <Image src='/logo_skechers.svg' width={200} height={250} alt='logo' />
    </Link>
  );
};

export default Logo;
