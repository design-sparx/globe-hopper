import { Title2 } from '@fluentui/react-components';
import { Col, Row } from 'react-grid-system';
import { StaysCard } from '@/components';
import TurkeyImg from '@/assets/packages/turkey.jpg';
import SpainImg from '@/assets/packages/spain.jpg';
import ItalyImg from '@/assets/packages/italy.jpg';
import ThailandImg from '@/assets/packages/thailand.jpg';

const Stays = [
  {
    img: TurkeyImg,
    city: 'New York',
    name: 'Baga Comfort',
    price: 455,
    rating: 4.5,
  },
  {
    img: SpainImg,
    city: 'California',
    name: 'New Apollo Hotel',
    price: 585,
    rating: 4.8,
  },
  {
    img: ItalyImg,
    city: 'Los Angeles',
    name: 'New Age Hotel',
    price: 385,
    rating: 4.6,
  },
  {
    img: ThailandImg,
    city: 'Chicago',
    name: 'Helios Beach Resort',
    price: 665,
    rating: 4.8,
  },
];

export const StaysSection = () => {
  const destinations = Stays.map((destination) => (
    <Col key={destination.name} lg={3}>
      <StaysCard data={destination} />
    </Col>
  ));

  return (
    <div>
      <Title2>Featured Stays</Title2>
      <Row>{destinations}</Row>
    </div>
  );
};
