import SiteAsideMenu from '@/components/layouts/site-aside';
import SiteHeader from '@/components/layouts/site-header';
import React from 'react';

export default async function LobbyLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className='flex h-full w-full bg-gray-50 pb-20'>
      <SiteAsideMenu />
      <div className='w-full'>
        <SiteHeader />
        <main className='relative h-full overflow-y-auto rounded-tl-2xl bg-background p-8'>
          {children}
        </main>
      </div>
    </div>
  );
}
