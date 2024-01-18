'use client';
import { IconMenu2 } from '@tabler/icons-react';
import { Button } from './ui/button';
import { useToggleSideNav } from '@/state-management/toggle-side-nav';

const ToggleSideBar = () => {
  const toggleSideBar = useToggleSideNav((s) => s.setOpen);
  return (
    <Button
      type='button'
      className='lg:hidden'
      size='icon'
      variant='ghost'
      onClick={() => toggleSideBar(true)}
    >
      <span className='sr-only'>Open sidebar</span>
      <IconMenu2 className='h-6 w-6' aria-hidden='true' />
    </Button>
  );
};

export default ToggleSideBar;
