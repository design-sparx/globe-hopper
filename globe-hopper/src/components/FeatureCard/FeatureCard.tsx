import {
  Button,
  Caption1,
  Card,
  CardHeader,
  Text,
} from '@fluentui/react-components';
import { ComponentProps } from 'react';
import { useStyles } from '@/components/FeatureCard/FeatureCard.styles.ts';
import { MoreHorizontalIcon } from 'lucide-react';

export type IFeatures = {
  icon: any;
  title: string;
  description: string;
  action?: string;
};

type FeatureCardProps = ComponentProps<'div'> & {
  data: IFeatures;
};

export const FeatureCard = ({ data, ...others }: FeatureCardProps) => {
  const classes = useStyles();

  return (
    <div {...others}>
      <Card className={classes.card}>
        <CardHeader
          image={<img className={classes.logo} src="" alt="App name logo" />}
          header={<Text weight="semibold">App Name</Text>}
          description={
            <Caption1 className={classes.caption}>Developer</Caption1>
          }
          action={
            <Button
              appearance="transparent"
              icon={<MoreHorizontalIcon />}
              aria-label="More options"
            />
          }
        />

        <p className={classes.text}>
          Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
          Marshmallow pastry jujubes toffee sugar plum.
        </p>
      </Card>
    </div>
  );
};
