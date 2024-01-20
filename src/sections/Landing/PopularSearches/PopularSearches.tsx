import { Flex } from '../../../components/Flex';
import {
  Body2,
  InteractionTag,
  InteractionTagPrimary,
  TagGroup,
  Title2,
} from '@fluentui/react-components';
import { useStyles } from './PopularSearches.styles.ts';

const SEARCHES = [
  'Eiffel Tower',
  'Great wall of China',
  'Louvere Museum',
  'Forbidden City',
  'Navy Pier',
  'The British Museum',
  'Ocean Pack',
  'Taj Mahal',
  'Tokyo Disneyland',
  'Glacier National Park',
  'Bora Bora',
  'Rome',
  'Maui',
  'Maldives',
  'Phuket',
  'Costa Rica',
  'Dubai',
  'Santorini',
  'Bali',
  'Tulum',
  'Florence',
  'Tasmania',
];

export const PopularSearchesSection = () => {
  const classes = useStyles();
  const searches = SEARCHES.map((search) => (
    <InteractionTag key={search} appearance="filled">
      <InteractionTagPrimary>{search}</InteractionTagPrimary>
    </InteractionTag>
  ));

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      className={classes.root}
    >
      <Title2>Popular search</Title2>
      <Body2>
        Here are some of the most popular search requests we see every year.
      </Body2>
      <TagGroup aria-label="Searches tag group" className={classes.tags}>
        {searches}
      </TagGroup>
    </Flex>
  );
};
