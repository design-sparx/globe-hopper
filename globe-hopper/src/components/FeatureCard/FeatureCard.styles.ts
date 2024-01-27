import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  main: {
    ...shorthands.gap('36px'),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  title: {
    ...shorthands.margin(0, 0, '12px'),
  },

  description: {
    ...shorthands.margin(0, 0, '12px'),
  },

  card: {
    width: '480px',
    maxWidth: '100%',
    height: 'fit-content',
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  logo: {
    ...shorthands.borderRadius('4px'),
    width: '48px',
    height: '48px',
  },

  text: {
    ...shorthands.margin(0),
  },
});
