import { Link } from 'react-router-dom';
import {
  BellDotIcon,
  CarIcon,
  ChevronDownIcon,
  Contact2Icon,
  DollarSignIcon,
  HotelIcon,
  PlaneIcon,
  StoreIcon,
} from 'lucide-react';
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from '@fluentui/react-components';
import { Container } from 'react-grid-system';
import { UserButton, Logo } from '@/components';
import { PATH_CAR_RENTALS, PATH_FLIGHTS, PATH_STAYS } from '@/constants';
import { useStyles } from './Navbar.styles.ts';

const LINKS = [
  {
    title: 'flights',
    link: PATH_FLIGHTS.root,
    icon: <PlaneIcon />,
  },
  {
    title: 'stays',
    link: PATH_STAYS.root,
    icon: <HotelIcon />,
  },
  {
    title: 'car rental',
    link: PATH_CAR_RENTALS.root,
    icon: <CarIcon />,
  },
];

const OTHER_LINKS = [
  {
    title: 'about',
    link: '#',
    icon: <StoreIcon />,
  },
  {
    title: 'pricing',
    link: '#',
    icon: <DollarSignIcon />,
  },
  {
    title: 'contact',
    link: '#',
    icon: <Contact2Icon />,
  },
];

export const Navbar = () => {
  const classes = useStyles();

  const links = LINKS.map((link) => (
    <Link to={link.link} key={link.title}>
      <MenuItem icon={link.icon}>{link.title}</MenuItem>
    </Link>
  ));

  const otherLinks = OTHER_LINKS.map((link) => (
    <Link to={link.link} key={link.title}>
      <Button
        appearance="transparent"
        icon={link.icon}
        className={classes.link}
      >
        {link.title}
      </Button>
    </Link>
  ));

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.brand}>
          <Logo />
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button
                icon={<ChevronDownIcon />}
                iconPosition="after"
                appearance="transparent"
              >
                More travel
              </Button>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>{links}</MenuList>
            </MenuPopover>
          </Menu>
        </div>
        <div className={classes.links}>
          {otherLinks}
          <Button appearance="transparent" icon={<BellDotIcon />} />
          <UserButton />
        </div>
      </Container>
    </div>
  );
};
