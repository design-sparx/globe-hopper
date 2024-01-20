import { useStyles } from './FlightSearch.styles.ts';
import { Flex } from '../Flex';
import {
  Body1Strong,
  Button,
  Field,
  Input,
  InputProps,
  Popover,
  PopoverProps,
  PopoverSurface,
  PopoverTrigger,
  Select,
  SelectProps,
  SpinButton,
  Tooltip,
} from '@fluentui/react-components';
import {
  ChangeEvent,
  ComponentProps,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { DatePicker } from '@fluentui/react-datepicker-compat';
import {
  ArrowLeftRightIcon,
  PlaneIcon,
  PlusIcon,
  SearchIcon,
  Users2Icon,
} from 'lucide-react';

type SelectTravellersFormProps = {
  onClose: () => void;
} & ComponentProps<'div'>;

const SelectTravellersForm = (props: SelectTravellersFormProps) => {
  const { onClose } = props;
  const classes = useStyles();

  return (
    <Flex direction="column" align="stretch">
      <Flex align="center" justify="space-between">
        <span className={classes.travelLabel}>Adults</span>
        <SpinButton className={classes.travelSpinner} />
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex direction="column" gap={4}>
          <span>Children</span>
          <small>Ages 2 to 17</small>
        </Flex>
        <SpinButton className={classes.travelSpinner} />
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex direction="column" gap={4}>
          <span>Infants on lap</span>
          <small>Younger than 2</small>
        </Flex>
        <SpinButton className={classes.travelSpinner} />
      </Flex>
      <Flex align="center" justify="space-between">
        <Flex direction="column" gap={4}>
          <span>Infants in seat</span>
          <small>Younger than 2</small>
        </Flex>
        <SpinButton className={classes.travelSpinner} />
      </Flex>
      <Flex justify="flex-end">
        <Button appearance="primary" onClick={onClose} size="medium">
          Done
        </Button>
      </Flex>
    </Flex>
  );
};

type FlightSearchFormProps = ComponentProps<'div'>;

export const FlightSearchForm = ({ ...others }: FlightSearchFormProps) => {
  const classes = useStyles();
  const [flightType, setFlightType] = useState('one-way');
  const [flightClass, setFlightClass] = useState('economy');
  const [flightFormFields, setFlightFormFields] = useState([
    { from: '', to: '', startDate: new Date(), endDate: new Date() },
  ]);
  const [travellersCount, setTravellersCount] = useState<number | null>(1);
  const [travellersPopoverOpen, setTravellersPopoverOpen] = useState(false);

  const onFlightTypeChange: SelectProps['onChange'] = (_event, data) => {
    setFlightType(data.value);
  };

  const onFlightClassChange: SelectProps['onChange'] = (_event, data) => {
    setFlightClass(data.value);
  };

  const handleFlightFormChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const data = [...flightFormFields];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    data[index][event.target.name] = event.target.value;

    setFlightFormFields(data);
  };

  // add form fields
  const addFields = () => {
    const newField = {
      from: '',
      to: '',
      startDate: new Date(),
      endDate: new Date(),
    };

    setFlightFormFields([...flightFormFields, newField]);
  };

  // remove form fields
  const removeFields = (index: number) => {
    const data = [...flightFormFields];
    data.splice(index, 1);
    setFlightFormFields(data);
  };

  // submit form
  const submit = (e: FormEvent) => {
    e.preventDefault();
    console.log(flightFormFields);
  };

  const onTravellersCountChange: InputProps['onChange'] = (_ev, data: any) => {
    // The controlled input pattern can be used for other purposes besides validation,
    // but validation is a useful example
    if (data.value.length <= 20) {
      setTravellersCount(data.value);
    }
  };

  const onTravellersPopoverChange: PopoverProps['onOpenChange'] = (_e, data) =>
    setTravellersPopoverOpen(data.open || false);

  useEffect(() => {
    if (flightType !== 'multi-city') {
      setFlightFormFields([
        {
          from: '',
          to: '',
          startDate: new Date(),
          endDate: new Date(),
        },
      ]);
    }
  }, [flightType]);

  return (
    <>
      <Flex direction="column" className={classes.root} {...others}>
        <Flex>
          <Select onChange={onFlightTypeChange} value={flightType} size="large">
            <option>one-way</option>
            <option>round-trip</option>
            <option>multi-city</option>
          </Select>
          <Select
            onChange={onFlightClassChange}
            value={flightClass}
            size="large"
          >
            <option>economy</option>
            <option>premium economy</option>
            <option>business</option>
            <option>first</option>
            <option>multiple</option>
          </Select>
          <Popover
            open={travellersPopoverOpen}
            onOpenChange={onTravellersPopoverChange}
          >
            <PopoverTrigger disableButtonEnhancement>
              <Input
                contentBefore={<Users2Icon aria-label="Travellers icon" />}
                type="number"
                value={`${travellersCount?.toString()} travellers`}
                size="large"
                onChange={onTravellersCountChange}
              />
            </PopoverTrigger>
            <PopoverSurface tabIndex={-1}>
              <SelectTravellersForm
                onClose={() => setTravellersPopoverOpen(false)}
              />
            </PopoverSurface>
          </Popover>
        </Flex>
        <form onSubmit={submit}>
          {flightFormFields.map((input, index) => (
            <Flex direction="column" key={`flight-form-${index}`}>
              {flightType === 'multi-city' && (
                <Body1Strong>Flight {index + 1}</Body1Strong>
              )}
              <Flex className={classes.row}>
                <Field aria-label="from">
                  <Input
                    contentBefore={<PlaneIcon aria-label="Flight icon" />}
                    placeholder="Leaving from?"
                    size="large"
                    value={input.from}
                    name="from"
                    onChange={(event) => handleFlightFormChange(index, event)}
                  />
                </Field>
                <Tooltip content="Switch destinations" relationship="label">
                  <Button icon={<ArrowLeftRightIcon />} size="large" />
                </Tooltip>
                <Field aria-label="to">
                  <Input
                    contentBefore={<PlaneIcon aria-label="Flight icon" />}
                    placeholder="Going to?"
                    size="large"
                    value={input.to}
                    name="to"
                    onChange={(event) => handleFlightFormChange(index, event)}
                  />
                </Field>
                <Field aria-label="start date">
                  <DatePicker
                    allowTextInput
                    placeholder="Select date..."
                    size="large"
                    name="startDate"
                    value={input.startDate}
                  />
                </Field>
                {flightType === 'round-trip' && (
                  <Field aria-label="end date">
                    <DatePicker
                      allowTextInput
                      placeholder="Select date..."
                      size="large"
                      name="endDate"
                      value={input.endDate}
                    />
                  </Field>
                )}
                {flightType === 'multi-city' && (
                  <Button onClick={() => removeFields(index)} size="large">
                    Remove
                  </Button>
                )}
                {flightType !== 'multi-city' && (
                  <Button onClick={submit} icon={<SearchIcon />} size="large">
                    Search
                  </Button>
                )}
              </Flex>
            </Flex>
          ))}
        </form>
        {flightType === 'multi-city' && (
          <>
            <Button onClick={addFields} icon={<PlusIcon />} size="large">
              Add another flight
            </Button>
            <Button onClick={submit} icon={<SearchIcon />} size="large">
              Search
            </Button>
          </>
        )}
      </Flex>
    </>
  );
};
