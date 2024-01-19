import { makeStyles, shorthands } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    rowGap: '20px',
    ...shorthands.padding(0, '20px'),
  },
  panels: {
    ...shorthands.padding(0, '10px'),
    '& th': {
      textAlign: 'left',
      ...shorthands.padding(0, '30px', 0, 0),
    },
  },
});
