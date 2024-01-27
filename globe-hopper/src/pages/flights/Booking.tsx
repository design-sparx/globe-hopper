import { Container } from 'react-grid-system';
import { SubscribeSection } from '../../sections/Shared/Subscribe';
import { DestinationsSection, HeroSection } from '../../sections/Flights';
import { DiscountsSection } from '../../sections/Shared/Discounts';
import { FeaturesSection } from '@/sections/Shared';

export const FlightBookingPage = () => {
  return (
    <Container>
      <HeroSection />
      <DiscountsSection />
      <FeaturesSection />
      <DestinationsSection />
      <SubscribeSection />
    </Container>
  );
};
