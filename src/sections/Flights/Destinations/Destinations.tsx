import { Title2 } from '@fluentui/react-components';
import TurkeyImg from '@/assets/packages/turkey.jpg';
import SpainImg from '@/assets/packages/spain.jpg';
import ItalyImg from '@/assets/packages/italy.jpg';
import ThailandImg from '@/assets/packages/thailand.jpg';
import { DestinationCard } from '@/components';
import { Col, Row } from 'react-grid-system';

const DESTINATIONS = [
  {
    img: TurkeyImg,
    title: 'Turkey',
    rating: 4.3,
  },
  {
    img: SpainImg,
    title: 'Spain',
    rating: 4.3,
  },
  {
    img: ItalyImg,
    title: 'Italy',
    rating: 4.3,
  },
  {
    img: ThailandImg,
    title: 'Thailand',
    rating: 4.3,
  },
];

export const DestinationsSection = () => {
  const destinations = DESTINATIONS.map((destination) => (
    <Col key={destination.title} lg={3}>
      <DestinationCard data={destination} />
    </Col>
  ));

  return (
    <div>
      <Title2>Popular Destinations</Title2>
      <Row>{destinations}</Row>
    </div>
  );
};
