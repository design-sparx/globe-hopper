import { Text } from '@fluentui/react-components';
import { Flex } from '@/components';

type AirlineLabelProps = {
  data: { airline: string; airlineIcon: string };
};
export const AirlineLabel = ({
  data: { airline, airlineIcon },
  ...others
}: AirlineLabelProps) => {
  return (
    <Flex {...others}>
      <img src={airlineIcon} alt={airline} />
      <Text>{airline}</Text>
    </Flex>
  );
};
