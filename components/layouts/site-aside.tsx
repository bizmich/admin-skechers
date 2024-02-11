'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Logo from '../Logo';
import { Icons } from '../icons';
import SiteSetting from './site-setting';
import { usePathname, useSearchParams } from 'next/navigation';

const SiteAsideMenu = () => {
  const { navigation } = siteConfig;
  const pathname = usePathname();

  return (
    <aside className='w-64 px-5'>
      <div className='flex items-center justify-center py-5'>
        <Logo />
      </div>
      <div className='flex h-full flex-col justify-between'>
        <Accordion type='multiple' className='flex flex-col gap-3 pt-8'>
          {navigation.map((el) => {
            const Icon = el.icon ? Icons[el.icon] : null;
            const LinkTag = el.href ? Link : 'div';
            return (
              <AccordionItem value={el.id} key={el.id}>
                <AccordionTrigger
                  className={cn('hover:no-underline ', {
                    '[&>[data-slot=description]]:hidden': !el.subMenu,
                  })}
                >
                  <LinkTag
                    href={el.href ? el.href : '/'}
                    className='flex gap-2 text-sm'
                  >
                    {Icon && <Icon className='size-5' />}
                    {el.name}
                  </LinkTag>
                </AccordionTrigger>
                {el.subMenu?.map((el) => (
                  <AccordionContent key={el.id} className='text-sm pl-8 py-1'>
                    <Link
                      href={el.href}
                      className={cn(
                        'w-full inline-block hover:underline cursor-pointer',
                        pathname === el.href && 'font-bold'
                      )}
                    >
                      {el.name}
                    </Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
            );
          })}
        </Accordion>
        <SiteSetting />
      </div>
    </aside>
  );
};

export default SiteAsideMenu;
