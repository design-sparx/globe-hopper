import {
  CalendarClockIcon,
  FastForwardIcon,
  ShieldCheckIcon,
  UtensilsIcon,
} from 'lucide-react';
import { Col, Row } from 'react-grid-system';
import { FeatureCard } from 'components/FeatureCard';
import { CardPreview, Text, Title3 } from '@fluentui/react-components';
import { Flex, UsersAvatarGroup } from '@/components';
import { RatingDisplay } from '@fluentui/react-rating-preview';

const FEATURES = [
  {
    icon: <UtensilsIcon />,
    title: 'Quality Food',
    description:
      'Departure defective arranging rapturous did. Conduct denied adding worthy little.',
  },
  {
    icon: <FastForwardIcon />,
    title: 'Quick Services',
    description: 'Supposing so be resolving breakfast am or perfectly.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'High Security',
    description: 'Arranging rapturous did believe him all had supported.',
  },
  {
    icon: <CalendarClockIcon />,
    title: '24 Hours Alert',
    description: 'Rapturous did believe him all had supported.',
  },
];

export const FeaturesSection = () => {
  const features = FEATURES.map((feature) => (
    <Col key={feature.title} lg={6}>
      <FeatureCard data={feature} />
    </Col>
  ));

  return (
    <div>
      <Row>
        <Col lg={4}>
          <CardPreview>
            <img
              src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHwxfDB8fHwy"
              alt=""
            />
          </CardPreview>
          <Flex
            wrap="nowrap"
            align="center"
            style={{ backgroundColor: 'white' }}
          >
            <UsersAvatarGroup />
            <RatingDisplay value={4.3} color="marigold" size="medium" />
          </Flex>
        </Col>
        <Col lg={8}>
          <Title3>The Best Holidays Start Here!</Title3>
          <Text>
            Book your hotel with us and don't forget to grab an awesome hotel
            deal to save massive on your stay.
          </Text>
          <Row>{features}</Row>
        </Col>
      </Row>
    </div>
  );
};
