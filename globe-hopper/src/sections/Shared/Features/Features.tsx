import {
  BadgePercent,
  BellDotIcon,
  Settings2Icon,
  TagsIcon,
} from 'lucide-react';
import { Col, Row } from 'react-grid-system';
import { Title2 } from '@fluentui/react-components';
import { FeatureCard } from 'components/FeatureCard';

const FEATURES = [
  {
    icon: <BadgePercent />,
    title: 'Save 20% or more',
    description: 'Compare multiple travel sites with one search.',
  },
  {
    icon: <BellDotIcon />,
    title: 'Track prices',
    description:
      'Not ready to book? Create a price alert for when prices drop.',
  },
  {
    icon: <Settings2Icon />,
    title: 'Filter your deals',
    description: 'Choose cabin class, free Wi-Fi and more.',
  },
  {
    icon: <TagsIcon />,
    title: 'Bundle and save',
    description: 'Save money when you bundle your flight + hotel.',
  },
];
export const FeaturesSection = () => {
  const features = FEATURES.map((feature) => (
    <Col key={feature.title} lg={3}>
      <FeatureCard data={feature} />
    </Col>
  ));

  return (
    <div>
      <Title2>Special offers</Title2>
      <Row>{features}</Row>
    </div>
  );
};
