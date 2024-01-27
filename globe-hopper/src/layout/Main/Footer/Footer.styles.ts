import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    ...shorthands.padding('64px', 0),
  },
  container: {
    width: '100%',
  },
  links: {
    display: 'flex',
    ...shorthands.gap('8px'),
  },
  link: {
    textTransform: 'capitalize',
  },
});
