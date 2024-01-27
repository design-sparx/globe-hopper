import { ComponentProps } from 'react';
import {
  Card,
  CardHeader,
  CardPreview,
  Subtitle2,
  Tag,
  Text,
} from '@fluentui/react-components';
import { useStyles } from '@/components/DestinationCard/DestinationCard.styles.ts';
import { RatingDisplay } from '@fluentui/react-rating-preview';
import { MapPinIcon } from 'lucide-react';

export type IDestination = {
  img: string;
  city: string;
  name: string;
  price: number;
  rating: number;
};

type DestinationCardProps = ComponentProps<'div'> & {
  data: IDestination;
};

export const StaysCard = ({ data, ...others }: DestinationCardProps) => {
  const classes = useStyles();
  const { name, city, price, img, rating } = data;

  return (
    <div {...others}>
      <Card className={classes.card}>
        <CardPreview
          className={classes.grayBackground}
          logo={<Tag icon={<MapPinIcon />}>{city}</Tag>}
        >
          <img
            className={classes.smallRadius}
            src={img}
            alt="Presentation Preview"
          />
        </CardPreview>
        <CardHeader
          header={<Subtitle2>{name}</Subtitle2>}
          description={<Text>{price} starting at</Text>}
          action={<RatingDisplay value={rating} />}
        />
      </Card>
    </div>
  );
};
