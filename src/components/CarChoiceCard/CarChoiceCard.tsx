import { ComponentProps } from 'react';
import { useStyles } from '@/components/CarChoiceCard/CarChoiceCard.styles.ts';
import { Subtitle2 } from '@fluentui/react-components';

type ICarChoice = {
  img: string;
  title: string;
};

type CarChoiceCardProps = ComponentProps<'div'> & {
  data: ICarChoice;
};

export const CarChoiceCard = ({ data, ...others }: CarChoiceCardProps) => {
  const classes = useStyles();
  const { img, title } = data;

  return (
    <div
      className={classes.root}
      style={{
        background: `radial-gradient(circle, rgba(0,0,0,.4) 0%, rgba(0,0,0,.2) 100%), url(${img})`,
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...others}
    >
      <Subtitle2>{title}</Subtitle2>
    </div>
  );
};
