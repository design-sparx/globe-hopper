import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    boxShadow: '0 0 2px rgba(0,0,0,0.12)',
    ...shorthands.borderBottom('1px', 'solid', 'rgba(0,0,0,.1)'),
    ...shorthands.padding('16px'),
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  brand: {
    display: 'flex',
    ...shorthands.gap('8px'),
  },
  links: {
    display: 'flex',
    ...shorthands.gap('8px'),
  },
  link: {
    textTransform: 'capitalize',
  },
});
