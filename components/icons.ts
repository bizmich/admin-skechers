import { IconKeyframes } from '@tabler/icons-react';
import {
  IconBellRinging,
  IconBuildingStore,
  IconEdit,
  IconEye,
  IconEyeClosed,
  IconHome,
  IconSettings,
  IconUser,
  IconUsers,
  IconTrash,
} from '@tabler/icons-react';
import React from 'react';
type IconProps = React.HTMLAttributes<SVGElement>;

interface IconDictionary {
  [key: string]: React.ComponentType<IconProps>;
}

export const Icons: IconDictionary = {
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
};
