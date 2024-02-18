'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { useToggleSideNav } from '@/state-management/toggle-side-nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from '../Logo';
import { Icons } from '../icons';
import SiteSetting from './site-setting';

const SiteAsideMenu = () => {
  const { navigation } = siteConfig;
  const pathname = usePathname();
  const { open, setOpen } = useToggleSideNav();

  React.useEffect(() => {
    let initialOpen = window.innerWidth >= 1024;

    if (open === undefined) {
      setOpen(initialOpen);
    }
  }, [open, setOpen]);

  return (
    <>
      {(open === undefined || open === true) && (
        <aside
          className={cn(
            'w-64 px-5 left-0 z-20 bg-gray-50 fixed inset-y-0 lg:sticky',
            { 'max-lg:hidden': open === undefined }
          )}
        >
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
                      <AccordionContent
                        key={el.id}
                        className='text-sm pl-8 py-1'
                      >
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
      )}
    </>
  );
};

export default SiteAsideMenu;
