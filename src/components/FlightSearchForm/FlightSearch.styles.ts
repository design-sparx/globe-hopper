import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {},
  travelLabel: { width: '320px' },
  travelSpinner: {
    maxWidth: '50px',
  },
  row: {
    ...shorthands.margin(0, 0, '8px', 0),
  },
});
