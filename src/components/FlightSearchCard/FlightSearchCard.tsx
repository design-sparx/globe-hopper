import {
  Button,
  Card,
  CardProps,
  Divider,
  Subtitle1,
  Text,
  Title2,
} from '@fluentui/react-components';
import { IFlightSearch } from '@/types';
import { Flex, FlightDetailsDrawer } from '@/components';
import { Col, Row } from 'react-grid-system';
import { PlaneIcon } from 'lucide-react';
import { useState } from 'react';

type FlightSearchCardProps = CardProps & {
  data: IFlightSearch;
  clickable?: boolean;
};

export const FlightSearchCard = ({
  clickable,
  data,
  ...others
}: FlightSearchCardProps) => {
  const {
    arrival_airport,
    arrival_time,
    departure_airport,
    departure_time,
    flight_class,
    flight_number,
    carry_on_included,
    passenger_count,
    airline,
    airline_icon,
    refundable,
  } = data;
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleFlightClick = () => {
    setDetailsOpen(true);
  };

  return (
    <>
      <Card onClick={handleFlightClick} {...others}>
        <Flex direction="column" align="stretch">
          <Flex justify="space-between">
            <Flex align="center">
              <img src={airline_icon} height={16} width={16} alt={airline} />
              <Text weight="semibold">
                {airline} ({flight_number})
              </Text>
            </Flex>
            <Text>Travel Class: {flight_class}</Text>
          </Flex>
          <Flex align="center" justify="space-between">
            <Row align="center" style={{ width: '450px' }}>
              <Col lg={4}>
                <Flex direction="column">
                  <Subtitle1>{departure_time}</Subtitle1>
                  <Text>{departure_airport}</Text>
                </Flex>
              </Col>
              <Col lg={4}>
                <Divider>
                  <PlaneIcon />
                </Divider>
              </Col>
              <Col lg={4}>
                <Flex direction="column">
                  <Subtitle1>{arrival_time}</Subtitle1>
                  <Text>{arrival_airport}</Text>
                </Flex>
              </Col>
            </Row>
            <Flex direction="column" align="end">
              <Title2>$65</Title2>
              <Button>Book Now</Button>
            </Flex>
          </Flex>
          <Divider />
          <Flex justify="space-between">
            <Text>Carry-on {!carry_on_included && 'not'} include</Text>
            <Text>{refundable ? 'Refundable' : 'Non-refundable'}</Text>
            <Text>Only {passenger_count} seats left</Text>
          </Flex>
        </Flex>
      </Card>
      <FlightDetailsDrawer
        open={detailsOpen}
        data={data}
        onClose={() => setDetailsOpen(false)}
        onOpenChange={(_, { open }) => setDetailsOpen(open)}
      />
    </>
  );
};
