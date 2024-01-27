import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {},
  row: {
    width: '100%',
    ...shorthands.margin(0, 0, '8px', 0),
  },
});
