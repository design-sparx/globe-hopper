import { Card, CardHeader, Subtitle2, Text } from '@fluentui/react-components';
import { ComponentProps } from 'react';
import { useStyles } from '@/components/FeatureCard/FeatureCard.styles.ts';

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
  const { icon, title, description } = data;

  return (
    <div {...others}>
      <Card className={classes.card}>
        <CardHeader image={icon} header={<Subtitle2>{title}</Subtitle2>} />

        <Text className={classes.text}>{description}</Text>
      </Card>
    </div>
  );
};
