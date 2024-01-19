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

  const Stays = memo(() => <div role="tabpanel" aria-labelledby="Stays"></div>);

  const CarRentals = memo(() => (
    <div role="tabpanel" aria-labelledby="CarRentals"></div>
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
        <Tab id="Stays" icon={<HotelIcon />} value="stays">
          Hotel
        </Tab>
        <Tab id="CarRentals" icon={<CarIcon />} value="car-rentals">
          Car rentals
        </Tab>
      </TabList>
      <div className={classes.panels}>
        {selectedValue === 'flight' && <Flight />}
        {selectedValue === 'stays' && <Stays />}
        {selectedValue === 'car-rentals' && <CarRentals />}
      </div>
    </div>
  );
};
