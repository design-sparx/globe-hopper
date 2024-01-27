import { Display } from '@fluentui/react-components';
import { ComponentProps } from 'react';
import { useStyles } from './Hero.styles.ts';
import { Flex, FlightSearchForm } from '@/components';

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
        <Display align="center">Search flights</Display>
        <div className={classes.card}>
          <FlightSearchForm />
        </div>
      </Flex>
    </div>
  );
};
