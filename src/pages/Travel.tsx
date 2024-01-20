import { Container } from 'react-grid-system';
import {
  HeroSection,
  PackagesSection,
  PopularSearchesSection,
  SearchSection,
} from '../sections/Landing';
import { SubscribeSection } from '../sections/Shared/Subscribe';

export const TravelPage = () => {
  return (
    <Container>
      <HeroSection />
      <SearchSection />
      <PackagesSection />
      <PopularSearchesSection />
      <SubscribeSection />
    </Container>
  );
};
