import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Image,
  Text,
  MenuProps,
  MenuGroup,
  MenuDivider,
} from '@fluentui/react-components';
import { Link } from 'react-router-dom';
import {
  BookHeart,
  LifeBuoyIcon,
  ListChecksIcon,
  LogOutIcon,
  SettingsIcon,
} from 'lucide-react';

type UserButtonProps = {
  withText?: boolean;
} & Partial<MenuProps>;

export const UserButton = ({ withText, ...others }: UserButtonProps) => {
  return (
    <Menu {...others}>
      <MenuTrigger disableButtonEnhancement>
        <Button
          icon={
            <Image
              alt="user avatar"
              shape="circular"
              src="https://res.cloudinary.com/ddh7hfzso/image/upload/v1700303804/me/ovqjhhs79u3g2fwbl2dd.jpg"
              height={24}
              width={24}
            />
          }
        >
          {withText && <Text>Kelvin Kiprop</Text>}
        </Button>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuGroup>
            <Link to="#">
              <MenuItem icon={<ListChecksIcon />}>Bookings</MenuItem>
            </Link>
            <Link to="#">
              <MenuItem icon={<BookHeart />}>Wishlist</MenuItem>
            </Link>
            <Link to="#">
              <MenuItem icon={<SettingsIcon />}>Settings</MenuItem>
            </Link>
            <Link to="#">
              <MenuItem icon={<LifeBuoyIcon />}>Help Center</MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup>
            <Link to="#">
              <MenuItem icon={<LogOutIcon />}>Sign Out</MenuItem>
            </Link>
          </MenuGroup>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
