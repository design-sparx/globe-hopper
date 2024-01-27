import { useStyles } from './CarRentalSearch.styles.ts';
import { Flex } from '../Flex';
import { Button, Field, Input } from '@fluentui/react-components';
import { ChangeEvent, FormEvent, useState } from 'react';
import { DatePicker } from '@fluentui/react-datepicker-compat';
import {
  formatDateToTimeString,
  TimePicker,
} from '@fluentui/react-timepicker-compat';
import { MapPin, SearchIcon } from 'lucide-react';

export const CarRentalSearchForm = () => {
  const classes = useStyles();
  const [formFields, setFormFields] = useState({
    pickUp: '',
    dropOff: '',
    pickUpDate: new Date(),
    dropOffDate: new Date(),
    pickUpTime: new Date(),
    dropOffTime: new Date(),
  });

  // submit form
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formFields);
  };

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const data = formFields;
    event.target.name = event.target.value;

    setFormFields(data);
  };

  return (
    <>
      <form onSubmit={submit}>
        <Flex direction="column">
          <Flex className={classes.row}>
            <Field aria-label="pick up" style={{ flexGrow: 1 }}>
              <Input
                contentBefore={<MapPin aria-label="Flight icon" />}
                placeholder="Pick up"
                size="large"
                value=""
                name="to"
                onChange={(event) => handleFormChange(event)}
                style={{ width: '100%' }}
              />
            </Field>
            <Field aria-label="drop off" style={{ flexGrow: 1 }}>
              <Input
                contentBefore={<MapPin aria-label="Flight icon" />}
                placeholder="Same as pick-up"
                size="large"
                value=""
                name="to"
                onChange={(event) => handleFormChange(event)}
              />
            </Field>
          </Flex>
          <Flex className={classes.row}>
            <Field aria-label="pick up date">
              <DatePicker
                placeholder="Pick up date..."
                size="large"
                name="pickUpDate"
                value={formFields.pickUpDate}
                onChange={(event) => handleFormChange(event)}
              />
            </Field>
            <Field aria-label="drop off date">
              <DatePicker
                placeholder="Drop off date..."
                size="large"
                name="dropOffDate"
                value={formFields.dropOffDate}
                onChange={(event) => handleFormChange(event)}
              />
            </Field>
            <Field aria-label="pick up time">
              <TimePicker
                placeholder="Pick up time..."
                size="large"
                name="pickUpTime"
                defaultValue={formatDateToTimeString(formFields.pickUpTime)}
                onChange={(event) => handleFormChange(event)}
              />
            </Field>
            <Field aria-label="drop off time">
              <TimePicker
                placeholder="Drop off time..."
                size="large"
                name="dropOffTime"
                defaultValue={formatDateToTimeString(formFields.dropOffTime)}
                onChange={(event) => handleFormChange(event)}
              />
            </Field>
          </Flex>
        </Flex>
      </form>
      <Button onClick={submit} icon={<SearchIcon />} size="large">
        Search
      </Button>
    </>
  );
};
