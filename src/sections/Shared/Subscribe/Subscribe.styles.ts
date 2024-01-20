import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.padding('24px'),
  },
});
