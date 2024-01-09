import { useStyles } from './Navbar.styles.ts';
import { Link } from 'react-router-dom';
import {
  BellDotIcon,
  Contact2Icon,
  DollarSignIcon,
  HotelIcon,
  NavigationIcon,
  PlaneIcon,
  StoreIcon,
} from 'lucide-react';
import { Button, Link as FluentLink } from '@fluentui/react-components';
import { UserButton } from '../../../components/UserButton';
import { Logo } from '../../../components/Logo';

const LINKS = [
  {
    title: 'tour',
    link: 'tour',
    icon: <NavigationIcon />,
  },
  {
    title: 'flights',
    link: 'flight',
    icon: <PlaneIcon />,
  },
  {
    title: 'hotel',
    link: 'hotel',
    icon: <HotelIcon />,
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
      <FluentLink as="span" appearance="subtle" className={classes.link}>
        {link.icon}
        {link.title}
      </FluentLink>
    </Link>
  ));

  const otherLinks = OTHER_LINKS.map((link) => (
    <Link to={link.link} key={link.link}>
      <FluentLink as="span" appearance="subtle" className={classes.link}>
        {link.icon}
        {link.title}
      </FluentLink>
    </Link>
  ));

  return (
    <div className={classes.root}>
      <Logo />
      <div className={classes.links}>{links}</div>
      <div className={classes.links}>
        {otherLinks}
        <Button icon={<BellDotIcon />} />
        <UserButton />
      </div>
    </div>
  );
};
