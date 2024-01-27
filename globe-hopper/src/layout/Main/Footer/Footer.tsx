import { useStyles } from './Footer.styles.ts';
import {
  CarIcon,
  FacebookIcon,
  HotelIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PlaneIcon,
  XIcon,
} from 'lucide-react';
import {
  Divider,
  Link as FluentLink,
  Title1,
} from '@fluentui/react-components';
import { Col, Container, Row } from 'react-grid-system';
import { Logo } from '../../../components/Logo';
import { Flex } from '../../../components/Flex';

const LINKS = [
  {
    title: 'page',
    links: [
      {
        title: 'about us',
        link: 'about',
      },
      {
        title: 'contact us',
        link: 'contact',
      },
      {
        title: 'pricing',
        link: 'pricing',
      },
      {
        title: 'packages',
        link: 'packages',
      },
    ],
  },
  {
    title: 'resources',
    links: [
      {
        title: 'help center',
        link: 'help',
      },
      {
        title: 'privacy policy',
        link: 'privacy',
      },
      {
        title: 'terms of service',
        link: 'terms',
      },
    ],
  },
  {
    title: 'bookings',
    links: [
      {
        title: 'flights',
        link: 'flight',
        icon: <PlaneIcon />,
      },
      {
        title: 'stays',
        link: 'stays',
        icon: <HotelIcon />,
      },
      {
        title: 'car rental',
        link: 'car-rentals',
        icon: <CarIcon />,
      },
    ],
  },
];

export const Footer = () => {
  const classes = useStyles();

  const groupedLinks = LINKS.map((group) => {
    return (
      <Col key={group.title}>
        <Title1>{group.title}</Title1>
        <Flex direction="column">
          {group.links.map((link) => (
            <FluentLink key={link.title}>{link.title}</FluentLink>
          ))}
        </Flex>
      </Col>
    );
  });

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Row>
          <Col lg={3}>
            <Flex direction="column">
              <Logo />
              <p>
                A travel / tourism / explorative website agency built using
                React, Vite and Fluent UI.
              </p>
              <FluentLink href="#">
                <PhoneIcon />
                <span>+1234567812</span>
              </FluentLink>
              <FluentLink href="#">
                <MailIcon />
                <span>example@gmail.com</span>
              </FluentLink>
            </Flex>
          </Col>
          {groupedLinks}
        </Row>
        <Divider />
        <Flex justify="space-between" align="center">
          <p>Copyrights &copy; {new Date().getFullYear()} Globe Hopper.</p>
          <FluentLink>Built by Design Sparx</FluentLink>
          <Flex>
            <FluentLink>
              <FacebookIcon />
            </FluentLink>
            <FluentLink>
              <InstagramIcon />
            </FluentLink>
            <FluentLink>
              <XIcon />
            </FluentLink>
            <FluentLink>
              <LinkedinIcon />
            </FluentLink>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};
