import { ComponentProps, memo, useState } from 'react';
import { useStyles } from './Search.styles.ts';
import {
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
  TabValue,
} from '@fluentui/react-components';
import { CarIcon, HotelIcon, PlaneIcon } from 'lucide-react';
import { FlightSearchForm } from '../../../components/FlightSearchForm';
import { StaySearchForm } from '../../../components/StaySearchForm';
import { CarRentalSearchForm } from '../../../components/CarRentalSearchForm';

type SearchSectionProps = ComponentProps<'div'>;

export const SearchSection = ({ ...others }: SearchSectionProps) => {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState<TabValue>('flight');

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value);
    console.log(event);
  };

  const Flight = memo(() => (
    <div role="tabpanel" aria-labelledby="Flight">
      <FlightSearchForm />
    </div>
  ));

  const Rentals = memo(() => (
    <div role="tabpanel" aria-labelledby="Rentals">
      <StaySearchForm />
    </div>
  ));

  const CarRentals = memo(() => (
    <div role="tabpanel" aria-labelledby="CarRentals">
      <CarRentalSearchForm />
    </div>
  ));

  return (
    <div className={classes.root} {...others}>
      <TabList
        selectedValue={selectedValue}
        onTabSelect={onTabSelect}
        size="large"
      >
        <Tab id="Flight" icon={<PlaneIcon />} value="flight">
          Flight
        </Tab>
        <Tab id="Rentals" icon={<HotelIcon />} value="stays">
          Rentals
        </Tab>
        <Tab id="CarRentals" icon={<CarIcon />} value="car-rentals">
          Car rentals
        </Tab>
      </TabList>
      <div className={classes.panels}>
        {selectedValue === 'flight' && <Flight />}
        {selectedValue === 'stays' && <Rentals />}
        {selectedValue === 'car-rentals' && <CarRentals />}
      </div>
    </div>
  );
};
