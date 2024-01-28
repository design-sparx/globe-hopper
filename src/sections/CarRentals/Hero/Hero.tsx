import { ComponentProps } from 'react';
import { useStyles } from './Hero.styles.ts';
import { CarRentalSearchForm, Flex } from '@/components';

type HeroSectionProps = ComponentProps<'div'>;

export const HeroSection = ({ ...others }: HeroSectionProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...others}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        className={classes.container}
      >
        <div className={classes.card}>
          <CarRentalSearchForm />
        </div>
      </Flex>
    </div>
  );
};
