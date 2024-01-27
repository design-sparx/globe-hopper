import { Container } from 'react-grid-system';
import { SubscribeSection } from '@/sections/Shared';
import { DestinationsSection, HeroSection } from '@/sections/Flights';
import { DiscountsSection } from '@/sections/Shared';
import { FeaturesSection } from '@/sections/Shared';
import { ProcessSection } from '@/sections/Shared';

export const FlightBookingPage = () => {
  return (
    <Container>
      <HeroSection />
      <DiscountsSection />
      <FeaturesSection />
      <DestinationsSection />
      <ProcessSection />
      <SubscribeSection />
    </Container>
  );
};
