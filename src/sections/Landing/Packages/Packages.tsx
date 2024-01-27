import { Button, Title2 } from '@fluentui/react-components';
import { Col, Row } from 'react-grid-system';
import TurkeyImg from '../../../assets/packages/turkey.jpg';
import SpainImg from '../../../assets/packages/spain.jpg';
import ItalyImg from '../../../assets/packages/italy.jpg';
import ThailandImg from '../../../assets/packages/thailand.jpg';
import { PackageCard, Flex } from '@/components';

const PACKAGES = [
  {
    img: TurkeyImg,
    title: 'Visit Istanbul',
    location: 'Turkey',
    offer: '3 days - 4 nights',
    price: 2000,
  },
  {
    img: SpainImg,
    title: 'Costa De Papagayo',
    location: 'Spain',
    offer: '2 days - 2 nights',
    price: 1900,
  },
  {
    img: ItalyImg,
    title: 'Venice',
    location: 'Italy',
    offer: '3 days - 2 nights',
    price: 1000,
  },
  {
    img: ThailandImg,
    title: 'Phuket, Kathu District',
    location: 'Thailand',
    offer: '3 days - 2 nights',
    price: 1000,
  },
];

export const PackagesSection = () => {
  const packages = PACKAGES.map((pack) => (
    <Col key={pack.title} lg={3}>
      <PackageCard pack={pack} />
    </Col>
  ));

  return (
    <Flex direction="column" align="center">
      <Title2>Our popular packages</Title2>
      <Row>{packages}</Row>
      <Button>Explore More</Button>
    </Flex>
  );
};
