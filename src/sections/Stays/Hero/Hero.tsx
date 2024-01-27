import { Body2, Button, Display, Subtitle2 } from '@fluentui/react-components';
import { ComponentProps } from 'react';
import { useStyles } from './Hero.styles.ts';
import { Flex, StaySearchForm } from '@/components';
import { Col, Row } from 'react-grid-system';
import { PlayCircleIcon } from 'lucide-react';

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
        <Row align="center">
          <Col lg={7}>
            <Flex direction="column">
              <Display>Find the top Hotels nearby.</Display>
              <Body2>
                We bring you not only a stay option, but an experience in your
                budget to enjoy the luxury.
              </Body2>
              <Flex>
                <Button size="large">Discover</Button>
                <Button size="large" icon={<PlayCircleIcon />}>
                  Watch our story
                </Button>
              </Flex>
            </Flex>
          </Col>
          <Col lg={5}>
            <div className={classes.card}>
              <Subtitle2 className={classes.formTitle}>
                Check availability
              </Subtitle2>
              <StaySearchForm />
            </div>
          </Col>
        </Row>
      </Flex>
    </div>
  );
};
