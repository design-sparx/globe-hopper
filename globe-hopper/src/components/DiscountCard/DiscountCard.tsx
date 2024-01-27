import {
  Card,
  CardProps,
  InteractionTag,
  InteractionTagPrimary,
  Subtitle2,
  Text,
  Title2,
} from '@fluentui/react-components';
import { IDiscounts } from '../../types';
import { Flex } from '../Flex';
import { useStyles } from './DiscountCard.styles.ts';

type DiscountCardProps = {
  data: IDiscounts;
} & CardProps;

export const DiscountCard = (props: DiscountCardProps) => {
  const {
    data: { discount_code, discount_type, title, img, target, amount },
    ...others
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card {...others}>
        <Flex direction="column">
          <Flex align="center">
            <img src={img} alt="" height={24} width={24} />
            <Subtitle2>{title}</Subtitle2>
          </Flex>
          <Title2>${amount} off</Title2>
          <Text>{discount_type}</Text>
          <Subtitle2>on {target} flights</Subtitle2>
          <InteractionTag appearance="outline">
            <InteractionTagPrimary>CODE: {discount_code}</InteractionTagPrimary>
          </InteractionTag>
        </Flex>
      </Card>
    </div>
  );
};
