import { Col, Row } from 'react-grid-system';
import LocationSearchImg from '@/assets/process/location-search.png';
import WorldMapImg from '@/assets/process/world-map.png';
import BookingImg from '@/assets/process/travel-booking.png';
import { ProcessCard } from '@/components';
import { Title2 } from '@fluentui/react-components';

const BOOKING_PROCESS = [
  {
    img: LocationSearchImg,
    title: 'Search Choice',
    description: 'Total 630+ destinations that we work with',
  },
  {
    img: WorldMapImg,
    title: 'Select Destination',
    description: 'Insipidity the sufficient discretion imprudence',
  },
  {
    img: BookingImg,
    title: 'Easy to Book',
    description: 'With an easy and fast ticket purchase process',
  },
];

export const ProcessSection = () => {
  const bookingProcesses = BOOKING_PROCESS.map((process) => (
    <Col key={process.title} lg={4}>
      <ProcessCard data={process} />
    </Col>
  ));

  return (
    <div>
      <Title2>Booking Process</Title2>
      <Row>{bookingProcesses}</Row>
    </div>
  );
};
