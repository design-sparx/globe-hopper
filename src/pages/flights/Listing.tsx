import { Col, Row } from 'react-grid-system';
import {
  Flex,
  FlexProps,
  FlightSearchCard,
  FlightSearchForm,
  TimeSelectCard,
} from '@/components';
import {
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbItem,
  Button,
  Card,
  Checkbox,
  Divider,
  Field,
  InfoLabel,
  Select,
  Spinner,
  Switch,
  Text,
  TextProps,
  Title3,
} from '@fluentui/react-components';
import { PATH_FLIGHTS, TIMES_OF_DAY } from '@/constants';
import { Link } from 'react-router-dom';
import { useFetch } from '@/hooks';
import { IFlightSearch } from '@/types';

const cardTitleProps: TextProps = {
  weight: 'bold',
};

const filterHeader: FlexProps = {
  justify: 'space-between',
  align: 'center',
};

const filterRow: FlexProps = {
  justify: 'space-between',
  align: 'center',
};

export const FlightsListingPage = () => {
  const { data: flights, loading: flightsLoading } = useFetch<IFlightSearch>(
    '/mocks/flights.json'
  );

  return (
    <div>
      <FlightSearchForm />
      <Row>
        <Col lg={3}>
          <Flex direction="column" align="stretch">
            <Card>
              <p>Price tracking</p>
              <Switch
                labelPosition="before"
                label="Watch prices. Get email notifications if prices go up or down."
              />
            </Card>
            <Title3>Filter by</Title3>
            <Card>
              <Flex direction="column" align="stretch" gap={0}>
                <Flex {...filterHeader}>
                  <Text {...cardTitleProps}>Stops</Text>
                  <Text {...cardTitleProps}>From</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="Refundable (20)" />
                  <Text>$129</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="1 stop (20)" />
                  <Text>$129</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="Late departure (20)" />
                  <Text>$129</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="Nonstop (20)" />
                  <Text>$129</Text>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" align="stretch" gap={0}>
                <Flex {...filterHeader}>
                  <Text {...cardTitleProps}>Airlines</Text>
                  <Text {...cardTitleProps}>From</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="Hahn Air Technologies (10)" />
                  <Text>$129</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="Kenya Airways (9)" />
                  <Text>$129</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="FlexFliight (1)" />
                  <Text>$129</Text>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" align="stretch" gap={0}>
                <Flex {...filterHeader}>
                  <Text {...cardTitleProps}>Travel and baggage</Text>
                  <Text {...cardTitleProps}>From</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="Carry-on bag included" />
                  <Text>$129</Text>
                </Flex>
              </Flex>
            </Card>
            <Card>
              <Text {...cardTitleProps}>Departure time in Nairobi</Text>
              <Flex wrap="wrap">
                {TIMES_OF_DAY.map((time) => (
                  <TimeSelectCard
                    key={'departure' + time.timeOfDay}
                    data={time}
                  />
                ))}
              </Flex>
            </Card>
            <Card>
              <Text {...cardTitleProps}>Arrival time in Mombasa</Text>
              <Flex wrap="wrap">
                {TIMES_OF_DAY.map((time) => (
                  <TimeSelectCard
                    key={'arrival' + time.timeOfDay}
                    data={time}
                  />
                ))}
              </Flex>
            </Card>
            <Card>
              <Flex direction="column" align="stretch" gap={0}>
                <Flex {...filterHeader}>
                  <Text {...cardTitleProps}>Departure airports</Text>
                  <Text {...cardTitleProps}>From</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="NBO (Nairobi) (13)" />
                  <Text>$129</Text>
                </Flex>
                <Flex {...filterRow}>
                  <Checkbox label="WIL (Nairobi) (1)" />
                  <Text>$129</Text>
                </Flex>
              </Flex>
            </Card>
            <Flex {...filterRow}>
              <Button>Clear all</Button>
              <Button>Filter Result</Button>
            </Flex>
          </Flex>
        </Col>
        <Col lg={9}>
          <Flex direction="column" align="stretch">
            <Breadcrumb aria-label="Flight listing navigation">
              <BreadcrumbItem>
                <Link to={PATH_FLIGHTS.root}>
                  <BreadcrumbButton>Choose departing flight</BreadcrumbButton>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <Link to={PATH_FLIGHTS.root}>
                  <BreadcrumbButton>Choose returning flight</BreadcrumbButton>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbDivider />
              <BreadcrumbItem>
                <BreadcrumbButton>Review your trip</BreadcrumbButton>
              </BreadcrumbItem>
            </Breadcrumb>
            <Divider />
            <Flex justify="end">
              <Field
                style={{ maxWidth: '400px' }}
                label={
                  <InfoLabel info="Prices may change based on availability and are not final until you complete your purchase. You can review any additional fees before checkout.">
                    Sort by
                  </InfoLabel>
                }
                hint=""
              >
                <Select>
                  <option>Price (Lowest)</option>
                  <option>Price (Highest)</option>
                  <option>Duration (Lowest)</option>
                  <option>Duration (Highest)</option>
                  <option>Departure (Earliest)</option>
                  <option>Departure (Latest)</option>
                  <option>Arrival (Earliest)</option>
                  <option>Departure (Latest)</option>
                </Select>
              </Field>
            </Flex>
            {flightsLoading && <Spinner />}
            {flights.slice(0, 10).map((flight) => (
              <FlightSearchCard
                key={flight.id}
                data={flight}
                clickable={true}
              />
            ))}
          </Flex>
        </Col>
      </Row>
    </div>
  );
};
