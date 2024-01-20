import { ComponentProps } from 'react';
import {
  Body1Strong,
  Caption1,
  Card,
  CardHeader,
  CardPreview,
  Text,
} from '@fluentui/react-components';
import { useStyles } from './PackageCard.styles.ts';
import { Flex } from '../Flex';
import { MapPin } from 'lucide-react';

export type IPackage = {
  img: string;
  title: string;
  location: string;
  offer: string;
  price: number;
};

export type PackageCardProps = { pack: IPackage } & ComponentProps<'div'>;

export const PackageCard = (props: PackageCardProps) => {
  const {
    pack: { title, offer, price, location, img },
    ...others
  } = props;
  const classes = useStyles();

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
          description={
            <Flex direction="column" gap={2}>
              <Caption1 className={classes.caption}>
                <Flex align="center">
                  <MapPin size={14} />
                  <span>{location}</span>
                </Flex>
              </Caption1>
              <Flex>
                <Text>{offer}</Text>
                <Body1Strong>{price}</Body1Strong>
              </Flex>
            </Flex>
          }
        />
      </Card>
    </div>
  );
};
