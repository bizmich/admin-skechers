import { IconBell } from "@tabler/icons-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Text from "./ui/text";

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconBell />
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <Text>NNotifications</Text>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
