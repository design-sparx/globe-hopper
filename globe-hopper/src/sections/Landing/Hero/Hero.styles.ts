import { makeStyles, shorthands } from '@fluentui/react-components';
import LandingHeroImage from '../../../assets/hero/landing.jpg';

export const useStyles = makeStyles({
  root: {
    backgroundImage: `radial-gradient(circle, rgba(0,0,0,.2) 0%, rgba(0,0,0,.2) 100%), url(${LandingHeroImage})`,
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    height: '500px',
    width: '100%',
    ...shorthands.borderRadius('8px'),
  },
  container: {
    height: '450px',
    color: 'white',
    ...shorthands.padding('0', '64px'),
  },
});
