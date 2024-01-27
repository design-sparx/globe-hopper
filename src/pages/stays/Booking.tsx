import { Container } from 'react-grid-system';
import {
  DiscountsSection,
  FeaturesSection,
  ProcessSection,
  SubscribeSection,
} from '@/sections/Shared';
import { HeroSection, StaysSection } from '@/sections/Stays';

export const StaysBookingPage = () => {
  return (
    <Container>
      <HeroSection />
      <DiscountsSection />
      <FeaturesSection />
      <StaysSection />
      <ProcessSection />
      <SubscribeSection />
    </Container>
  );
};
