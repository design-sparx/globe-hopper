import {
  Caption1,
  Card,
  CardProps,
  Checkbox,
  Text,
} from '@fluentui/react-components';
import { createElement, useCallback, useState } from 'react';
import { ITimeOfDay } from '@/types';
import { Flex } from '@/components';

type ICheckboxState = {
  selected: boolean;
  checked: boolean;
};

type TimeSelectCardProps = CardProps & {
  data: ITimeOfDay;
};

export const TimeSelectCard = ({ data, ...others }: TimeSelectCardProps) => {
  const [selected, setSelected] = useState(false);
  const { startTime, endTime, timeOfDay, icon } = data;

  const setCheckboxState = useCallback(
    ({ selected, checked }: ICheckboxState, setFn: (value: boolean) => void) =>
      setFn(selected || checked),
    []
  );

  const onSelectedChange = useCallback(
    (_: any, state: any) => setCheckboxState(state, setSelected),
    [setCheckboxState]
  );

  return (
    <>
      <Card
        selected={selected}
        onSelectionChange={onSelectedChange}
        floatingAction={
          <Checkbox onChange={onSelectedChange} checked={selected} />
        }
        {...others}
      >
        <Flex direction="column" gap={4}>
          {createElement(icon, { style: { width: 20, height: 20 } })}
          <Text weight="semibold" style={{ textTransform: 'capitalize' }}>
            {timeOfDay}
          </Text>
          <Caption1>
            ({startTime} - {endTime})
          </Caption1>
        </Flex>
      </Card>
    </>
  );
};
