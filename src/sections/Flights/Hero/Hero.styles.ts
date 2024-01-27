import { makeStyles, shorthands, tokens } from '@fluentui/react-components';
import FlightsHeroImg from '../../../assets/hero/flights.jpg';

export const useStyles = makeStyles({
  root: {
    backgroundImage: `radial-gradient(circle, rgba(0,0,0,.2) 0%, rgba(0,0,0,.2) 100%), url(${FlightsHeroImg})`,
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
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.padding('24px'),
  },
});
