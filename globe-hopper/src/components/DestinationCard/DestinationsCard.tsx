import { ComponentProps } from 'react';
import {
  Card,
  CardHeader,
  CardPreview,
  Text,
} from '@fluentui/react-components';
import { useStyles } from '@/components/DestinationCard/DestinationCard.styles.ts';

export type IDestination = {
  img: string;
  title: string;
  rating: number;
};

type DestinationCardProps = ComponentProps<'div'> & {
  data: IDestination;
};

export const DestinationCard = ({ data, ...others }: DestinationCardProps) => {
  const classes = useStyles();
  const { title, img, rating } = data;

  return (
    <div {...others}>
      <Card className={classes.card}>
        <CardPreview className={classes.grayBackground}>
          <img
            className={classes.smallRadius}
            src={img}
            alt="Presentation Preview"
          />
        </CardPreview>

        <CardHeader
          header={<Text weight="semibold">{title}</Text>}
          description={<Text>{rating}</Text>}
        />
      </Card>
    </div>
  );
};
