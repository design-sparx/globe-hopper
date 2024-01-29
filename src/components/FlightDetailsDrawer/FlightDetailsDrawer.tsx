import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Body1Strong,
  Button,
  Caption1,
  Card,
  Divider,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerProps,
  Link,
  Subtitle1,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tag,
  Text,
} from '@fluentui/react-components';
import { IFlightSearch } from '@/types';
import { ExternalLinkIcon, PlaneIcon, XIcon } from 'lucide-react';
import { AirlineLabel, Flex } from '@/components';
import { Col, Row } from 'react-grid-system';

const FARES_COLUMNS = [
  { columnKey: 'baseFare', label: 'Base Fare' },
  { columnKey: 'taxesAndFees', label: 'Taxes and Fees' },
  { columnKey: 'totalFees', label: 'Total Fees' },
];

const BAGGAGE_COLUMNS = [
  { columnKey: 'baggageType', label: 'Baggage Type' },
  { columnKey: 'checkIn', label: 'Check In' },
  { columnKey: 'cabin', label: 'Cabin' },
];

const CANCELLATION_COLUMNS = [
  { columnKey: 'timeFrame', label: 'Time Frame' },
  { columnKey: 'airFree', label: 'Air Free + MMT Free' },
];

const FARES_DATA = [
  {
    baseFare: { label: '$60.00' },
    taxesAndFees: { label: '$5.00' },
    totalFees: { label: '$65.00' },
  },
];

const BAGGAGE_DATA = [
  {
    baggageType: { label: 'Adult' },
    checkIn: { label: '2 Pcs' },
    cabin: { label: '7kg' },
  },
];

const CANCELLATION_DATA = [
  {
    timeFrame: { label: '0 hours to 24 hours' },
    airFree: { label: 'Non refundable' },
  },
  {
    timeFrame: { label: '24 hours to 365 days' },
    airFree: { label: '$55 + $10' },
  },
];

type FlightDetailsDrawerProps = DrawerProps & {
  data: IFlightSearch;
  onClose: () => void;
};

export const FlightDetailsDrawer = ({
  data,
  onClose,
  ...others
}: FlightDetailsDrawerProps) => {
  const {
    arrival_airport,
    departure_airport,
    departure_time,
    departure_date,
    arrival_time,
    arrival_date,
    flight_number,
    flight_class,
    refundable,
    carry_on_included,
    airline,
    airline_icon,
    id,
    passenger_count,
  } = data;

  return (
    <>
      <Drawer position="end" size="medium" {...others}>
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<XIcon />}
                onClick={onClose}
              />
            }
          >
            Flight details to {arrival_airport}
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <Flex direction="column" align="stretch">
            <Flex>
              <Body1Strong>
                {departure_time} - {arrival_time} (1h, nonstop)
              </Body1Strong>
              <Flex>
                <img src={airline_icon} alt={airline} height={16} width={16} />
                <Text>{airline}</Text>
              </Flex>
            </Flex>
            <Accordion collapsible>
              <AccordionItem value="1">
                <AccordionHeader>Flight information</AccordionHeader>
                <AccordionPanel>
                  <Card>
                    <Flex direction="column" align="stretch">
                      <Flex justify="space-between">
                        <AirlineLabel
                          data={{ airline, airlineIcon: airline_icon }}
                        />
                        <Text>Travel Class: {flight_class}</Text>
                      </Flex>
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
                    </Flex>
                    <Divider />
                    <Flex>
                      <Tag>
                        Below average CO<sup>2</sup>
                      </Tag>
                      <Button icon={<ExternalLinkIcon />} iconPosition="after">
                        Learn More
                      </Button>
                    </Flex>
                  </Card>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionHeader>Fare detail</AccordionHeader>
                <AccordionPanel>
                  <Table arial-label="Fares table">
                    <TableHeader>
                      <TableRow>
                        {FARES_COLUMNS.map((column) => (
                          <TableHeaderCell key={column.columnKey}>
                            {column.label}
                          </TableHeaderCell>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {FARES_DATA.map((item) => (
                        <TableRow key={item.baseFare.label}>
                          <TableCell>{item.baseFare.label}</TableCell>
                          <TableCell>{item.taxesAndFees.label}</TableCell>
                          <TableCell>{item.totalFees.label}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="3">
                <AccordionHeader>Baggage policy</AccordionHeader>
                <AccordionPanel>
                  <AirlineLabel data={{ airline, airlineIcon: airline_icon }} />
                  <Table arial-label="Baggages table">
                    <TableHeader>
                      <TableRow>
                        {BAGGAGE_COLUMNS.map((column) => (
                          <TableHeaderCell key={column.columnKey}>
                            {column.label}
                          </TableHeaderCell>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {BAGGAGE_DATA.map((item) => (
                        <TableRow key={item.baggageType.label}>
                          <TableCell>{item.baggageType.label}</TableCell>
                          <TableCell>{item.checkIn.label}</TableCell>
                          <TableCell>{item.cabin.label}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Text>*1 Pc (piece) = 23 KG (kilograms)</Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="4">
                <AccordionHeader>Cancellation</AccordionHeader>
                <AccordionPanel>
                  <AirlineLabel data={{ airline, airlineIcon: airline_icon }} />
                  <Table arial-label="Baggages table">
                    <TableHeader>
                      <TableRow>
                        {CANCELLATION_COLUMNS.map((column) => (
                          <TableHeaderCell key={column.columnKey}>
                            {column.label}
                          </TableHeaderCell>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {CANCELLATION_DATA.map((item) => (
                        <TableRow key={item.timeFrame.label}>
                          <TableCell>{item.timeFrame.label}</TableCell>
                          <TableCell>{item.airFree.label}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Text>*From the date of departure</Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Button>Book Now</Button>
            <Text>
              Baggage fees reflect the airline's standard fees based on the
              selected fare class. Fees may vary based on size and weight
              restrictions as well as loyalty programs and other promotions. For
              more information, check with{' '}
              <Link href="#">
                {airline} <ExternalLinkIcon size={12} />
              </Link>
              .
            </Text>
            <Text>
              You can purchase checked bags from{' '}
              <Link href="#">
                {airline} <ExternalLinkIcon size={12} />
              </Link>{' '}
              or through the link in your confirmation or check-in emails.
            </Text>
          </Flex>
        </DrawerBody>
      </Drawer>
    </>
  );
};
