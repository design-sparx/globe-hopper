import {
  AccessibilityIcon,
  BoltIcon,
  CarIcon,
  LeafIcon,
  LifeBuoyIcon,
  WifiIcon,
} from 'lucide-react';
import { Col, Row } from 'react-grid-system';
import { FeatureCard } from 'components/FeatureCard';
import { Title3 } from '@fluentui/react-components';

const FEATURES = [
  {
    icon: <BoltIcon />,
    title: 'Advance Booking',
    description:
      'Happiness prosperous impression had conviction For every delay in they Extremity now.',
  },
  {
    icon: <LeafIcon />,
    title: 'Economical Trip',
    description:
      'Extremity now strangers contained breakfast him discourse additions Sincerity.',
  },
  {
    icon: <LifeBuoyIcon />,
    title: 'Secure and Safer',
    description:
      'Perpetual extremity now strangers contained breakfast him discourse additions.',
  },
  {
    icon: <CarIcon />,
    title: 'Vehicle Options',
    description:
      'The Prosperous impression had conviction For every delay in they Extremity now.',
  },
  {
    icon: <WifiIcon />,
    title: 'WiFi',
    description:
      'Extremity now strangers contained breakfast him discourse additions Sincerity.',
  },
  {
    icon: <AccessibilityIcon />,
    title: 'Polite Driver',
    description:
      'Perpetual extremity now strangers contained breakfast him discourse additions.',
  },
];

export const FeaturesSection = () => {
  const features = FEATURES.map((feature) => (
    <Col key={feature.title} lg={4}>
      <FeatureCard data={feature} />
    </Col>
  ));

  return (
    <div>
      <Title3>Why Choose Us</Title3>
      <Row>{features}</Row>{' '}
    </div>
  );
};
