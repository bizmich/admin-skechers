import { siteConfig } from '@/config/site';
import Logo from '../Logo';
import Link from 'next/link';
import { Icons } from '../icons';
import SiteSetting from './site-setting';
import { Button } from '../ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const SiteAsideMenu = () => {
  const { navigation } = siteConfig;
  return (
    <aside className='w-[15%] px-5'>
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
                    className='text-sm pl-8 py-1 cursor-pointer hover:underline'
                  >
                    <Link href={el.href}>{el.name}</Link>
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
