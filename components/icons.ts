import React from "react";
import {
  IconCash,
  IconSettings,
  IconBellRinging,
  IconEdit,
  IconListDetails,
  IconUsersGroup,
  IconHome,
  IconUser,
  IconUsers,
  IconEye,
  IconEyeClosed,
} from "@tabler/icons-react";
type IconProps = React.HTMLAttributes<SVGElement>;

interface IconDictionary {
  [key: string]: React.ComponentType<IconProps>;
}

export const Icons: IconDictionary = {
  home: IconHome,
  user: IconUser,
  users: IconUsers,
  group: IconUsersGroup,
  schedule: IconListDetails,
  cash: IconCash,
  edit: IconEdit,
  notification: IconBellRinging,
  settings: IconSettings,
  eye: IconEye,
  eyeOff: IconEyeClosed,
};
