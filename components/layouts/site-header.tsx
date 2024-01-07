import { IconMenu2 } from '@tabler/icons-react';
import Notifications from '../notifications';
import SignOut from '../sign-out';
import { Button } from '../ui/button';

const Header = () => {
  return (
    <header className='flex w-full items-center justify-end px-5 py-2'>
      <div>
        <div className='flex items-center gap-2'>
          {/* <ModeToggle /> */}
          <Notifications />
          <SignOut />
          <Button
            type='button'
            className='lg:hidden'
            size='icon'
            variant='ghost'
            //   onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <IconMenu2 className='h-6 w-6' aria-hidden='true' />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
