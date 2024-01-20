import { makeStyles, shorthands, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: tokens.colorBrandBackground2,
    ...shorthands.padding('24px'),
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    ...shorthands.gap('8px'),
  },
  tag: {},
});
