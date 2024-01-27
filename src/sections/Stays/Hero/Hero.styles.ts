import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import StaysHeroImg from '../../../assets/hero/stays.jpg';

export const useStyles = makeStyles({
  root: {
    backgroundImage: `radial-gradient(circle, rgba(0,0,0,.2) 0%, rgba(0,0,0,.2) 100%), url(${StaysHeroImg})`,
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    minHeight: '250px',
    width: '100%',
    ...shorthands.borderRadius('8px'),
  },
  container: {
    minHeight: '250px',
    color: 'white',
    ...shorthands.padding('32px', '64px'),
  },
  card: {
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.padding('24px'),
  },
  formTitle: {
    color: 'black',
    ...shorthands.margin(0, 0, '16px', 0),
  },
});
