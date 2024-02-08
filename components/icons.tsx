import {
  IconBellRinging,
  IconBuildingStore,
  IconEdit,
  IconEye,
  IconEyeClosed,
  IconHome,
  IconKeyframes,
  IconPlus,
  IconSettings,
  IconTrash,
  IconUser,
  IconUsers,
} from '@tabler/icons-react';
import React from 'react';
type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  home: IconHome,
  user: IconUser,
  users: IconUsers,
  store: IconBuildingStore,
  edit: IconEdit,
  notification: IconBellRinging,
  settings: IconSettings,
  eye: IconEye,
  eyeOff: IconEyeClosed,
  pages: IconKeyframes,
  trash: IconTrash,
  add: IconPlus,

  spinner: (props: IconProps) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='animate-spin size-5'
      {...props}
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  ),
};
