import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  main: {
    ...shorthands.gap('36px'),
    ...shorthands.margin('16px', '0'),
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
    minHeight: '100px',
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
