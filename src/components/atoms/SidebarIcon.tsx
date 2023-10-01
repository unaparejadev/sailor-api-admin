import React from "react";
import {
  UserGroupIcon,
  HeartIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const classNames = "h-6 w-6 text-blue-500";

const iconMapper = {
  ["UserGroupIcon"]: <UserGroupIcon className={classNames} title="Senshi" />,
  ["HeartIcon"]: <HeartIcon className={classNames} title="Familiars" />,
  ["MoonIcon"]: <MoonIcon className={classNames} title="Accesories" />,
};

interface SidebarIconProps {
  icon: keyof typeof iconMapper;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon }) => iconMapper[icon];

export default SidebarIcon;
