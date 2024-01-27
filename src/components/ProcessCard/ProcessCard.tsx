import { ComponentProps } from 'react';
import { Card, CardPreview, Subtitle2, Text } from '@fluentui/react-components';

export type IProcess = {
  img: string;
  title: string;
  description: string;
};

type ProcessCardProps = ComponentProps<'div'> & {
  data: IProcess;
};

export const ProcessCard = ({ data, ...others }: ProcessCardProps) => {
  const { img, title, description } = data;

  return (
    <div {...others}>
      <Card appearance="subtle">
        <CardPreview>
          <img src={img} alt={title} />
        </CardPreview>

        <Subtitle2>{title}</Subtitle2>
        <Text>{description}</Text>
      </Card>
    </div>
  );
};
