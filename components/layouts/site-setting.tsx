import { siteConfig } from '@/config/site';
import { Icons } from '../icons';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import Link from 'next/link';

const SiteSetting = () => {
  const { settings } = siteConfig;
  const Icon = Icons[settings.icon];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='w-full' variant='ghost'>
          <Icon className='h-5 w-5' />
          {settings.name}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col p-0'>
        {settings.children.map((el) => (
          <Button
            key={el.name}
            asChild
            variant='ghost'
            className='justify-start'
          >
            <Link href={el.href}>{el.name}</Link>
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};
export default SiteSetting;
