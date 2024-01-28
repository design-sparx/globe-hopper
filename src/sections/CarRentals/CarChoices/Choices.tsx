import SuvImg from '@/assets/car-choices/suv.jpg';
import EconomicImg from '@/assets/car-choices/economic-cars.jpg';
import PremiumImg from '@/assets/car-choices/premium-car.jpg';
import ConvertibleImg from '@/assets/car-choices/convertible.jpg';
import VanImg from '@/assets/car-choices/van.jpg';
import PickupImg from '@/assets/car-choices/pickup.jpg';
import { Col, Row } from 'react-grid-system';
import { CarChoiceCard } from '@/components';

const CAR_CHOICES = [
  { img: SuvImg, title: 'SUV' },
  { img: EconomicImg, title: 'Economic Car' },
  { img: PremiumImg, title: 'Premium Car' },
  { img: ConvertibleImg, title: 'Convertible / Luxury' },
  { img: VanImg, title: 'Passenger Van' },
  { img: PickupImg, title: 'Pickup Truck' },
];

export const CarChoicesSection = () => {
  const choices = CAR_CHOICES.map((choice) => (
    <Col key={choice.title} lg={2}>
      <CarChoiceCard data={choice} />
    </Col>
  ));

  return (
    <div>
      <Row>{choices}</Row>
    </div>
  );
};
