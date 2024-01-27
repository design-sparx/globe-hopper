import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  travelLabel: { width: '320px' },
  travelSpinner: {
    maxWidth: '50px',
  },
  row: {},
  label: {
    color: tokens.colorNeutralForeground1,
    ...shorthands.margin('8px', 0),
  },
});
