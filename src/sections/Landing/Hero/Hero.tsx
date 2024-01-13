import { useStyles } from './Hero.styles.ts';
import { Body2, Display, Tag, TagGroup } from '@fluentui/react-components';
import { Flex } from '../../../components/Flex';

export const HeroSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        className={classes.container}
      >
        <TagGroup aria-label="Slogans" role="list">
          <Tag role="listitem">wander</Tag>
          <Tag role="listitem">explore</Tag>
          <Tag role="listitem">discover</Tag>
        </TagGroup>
        <Display align="center">Explore your horizon in every way!</Display>
        <Body2 align="center">
          Explore the world's most breathtaking destinations and create memories
          that last a lifetime.
        </Body2>
      </Flex>
    </div>
  );
};
