import { useStyles } from './StaySearch.styles.ts';
import { Flex } from '../Flex';
import {
  Button,
  Field,
  Input,
  InputProps,
  Popover,
  PopoverProps,
  PopoverSurface,
  PopoverTrigger,
  SpinButton,
} from '@fluentui/react-components';
import { ChangeEvent, ComponentProps, FormEvent, useState } from 'react';
import { DatePicker } from '@fluentui/react-datepicker-compat';
import { MapPin, SearchIcon, Users2Icon } from 'lucide-react';

type SelectTravellersFormProps = {
  onClose: () => void;
} & ComponentProps<'div'>;

const SelectGuestsForm = (props: SelectTravellersFormProps) => {
  const { onClose } = props;
  const classes = useStyles();

  return (
    <Flex direction="column" align="stretch">
      <Flex align="center" justify="space-between">
        <Flex direction="column" gap={4}>
          <span>Adults</span>
          <small>Ages 13 and above</small>
        </Flex>
        <SpinButton className={classes.travelSpinner} />
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex direction="column" gap={4}>
          <span>Child</span>
          <small>Ages 13 below</small>
        </Flex>
        <SpinButton className={classes.travelSpinner} />
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex direction="column" gap={4}>
          <span>Rooms</span>
          <small>Max room 8</small>
        </Flex>
        <SpinButton className={classes.travelSpinner} max={8} />
      </Flex>
      <Flex justify="flex-end">
        <Button appearance="primary" onClick={onClose} size="large">
          Done
        </Button>
      </Flex>
    </Flex>
  );
};

export const StaySearchForm = () => {
  const classes = useStyles();
  const [formFields, setFormFields] = useState({
    to: '',
    checkIn: new Date(),
    checkOut: new Date(),
  });
  const [guestsCount, setGuestsCount] = useState<number | null>(1);
  const [guestsPopoverOpen, setGuestsPopoverOpen] = useState(false);

  // submit form
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formFields);
  };

  //
  const onGuestsCountChange: InputProps['onChange'] = (_ev, data: any) => {
    // The controlled input pattern can be used for other purposes besides validation,
    // but validation is a useful example
    if (data.value.length <= 20) {
      setGuestsCount(data.value);
    }
  };

  const onTravellersPopoverChange: PopoverProps['onOpenChange'] = (_e, data) =>
    setGuestsPopoverOpen(data.open || false);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const data = formFields;
    event.target.name = event.target.value;

    setFormFields(data);
  };

  return (
    <Flex>
      <form onSubmit={submit}>
        <Flex direction="column">
          <Flex className={classes.row}>
            <Field aria-label="going to">
              <Input
                contentBefore={<MapPin aria-label="Flight icon" />}
                placeholder="Going to?"
                size="large"
                value={formFields.to}
                name="to"
                onChange={(event) => handleFormChange(event)}
              />
            </Field>
            <Field aria-label="check in">
              <DatePicker
                allowTextInput
                placeholder="Check in..."
                size="large"
                value={formFields.checkIn}
                name="checkIn"
                onChange={(event) => handleFormChange(event)}
              />
            </Field>
            <Field aria-label="check out">
              <DatePicker
                allowTextInput
                placeholder="Check out..."
                size="large"
                value={formFields.checkOut}
                name="checkOut"
                onChange={(event) => handleFormChange(event)}
              />
            </Field>
            <Popover
              open={guestsPopoverOpen}
              onOpenChange={onTravellersPopoverChange}
            >
              <PopoverTrigger disableButtonEnhancement>
                <Input
                  contentBefore={<Users2Icon aria-label="Travellers icon" />}
                  type="number"
                  value={`${guestsCount?.toString()} guests, 1 room`}
                  size="large"
                  onChange={onGuestsCountChange}
                />
              </PopoverTrigger>
              <PopoverSurface tabIndex={-1}>
                <SelectGuestsForm onClose={() => setGuestsPopoverOpen(false)} />
              </PopoverSurface>
            </Popover>
          </Flex>
        </Flex>
      </form>
      <Button onClick={submit} icon={<SearchIcon />} size="large">
        Search
      </Button>
    </Flex>
  );
};
