import { siteConfig } from '@/config/site';
import Logo from '../Logo';

import Link from 'next/link';
import { Icons } from '../icons';
import { Button } from '../ui/button';
import SiteSetting from './site-setting';

const SiteAsideMenu = () => {
  const { navigation } = siteConfig;
  return (
    <aside className='w-[15%] px-5 '>
      <div className='flex items-center justify-center py-5'>
        <Logo />
      </div>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex flex-col gap-3 pt-8'>
          {navigation.map((el) => {
            const Icon = el.icon ? Icons[el.icon] : null;
            return (
              <Button
                asChild
                key={el.id}
                variant='ghost'
                className='justify-normal gap-2'
              >
                <Link href={el.href}>
                  {Icon && <Icon />}
                  {el.name}
                </Link>
              </Button>
            );
          })}
        </div>
        <SiteSetting />
      </div>
    </aside>
  );
};

export default SiteAsideMenu;
