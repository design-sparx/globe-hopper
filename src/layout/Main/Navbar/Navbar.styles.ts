import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  links: {
    display: 'flex',
    ...shorthands.gap('8px'),
  },
  link: {
    textTransform: 'capitalize',
  },
});
