import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'none',
    ...shorthands.gap('8px'),

    ':hover': {
      textDecorationLine: 'underline',
      cursor: 'pointer',
    },
  },
});
