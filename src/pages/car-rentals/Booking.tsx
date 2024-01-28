import { Container } from 'react-grid-system';
import {
  DiscountsSection,
  FeaturesSection,
  ProcessSection,
  SubscribeSection,
} from '@/sections/Shared';
import { CarChoicesSection, HeroSection } from '@/sections/CarRentals';

export const CarRentalBookingPage = () => {
  return (
    <Container>
      <HeroSection />
      <DiscountsSection />
      <FeaturesSection />
      <CarChoicesSection />
      <ProcessSection />
      <SubscribeSection />
    </Container>
  );
};
