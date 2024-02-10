import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Icons } from '../icons';
import { Button } from '../ui/button';

const SiteSetting = () => {
  const { settings } = siteConfig;
  const Icon = Icons[settings.icon];
  return (
    <Button className='w-full' asChild variant='ghost'>
      <Link href='/settings'>
        <Icon className='h-5 w-5' />
        {settings.name}
      </Link>
    </Button>
  );
};
export default SiteSetting;
