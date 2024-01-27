import { Subtitle1 } from '@fluentui/react-components';
import { useStyles } from './Logo.styles.ts';
import { CompassIcon } from 'lucide-react';

export const Logo = () => {
  const classes = useStyles();

  return (
    <a className={classes.root} href="#">
      <CompassIcon />
      <Subtitle1>Globe Hoppers</Subtitle1>
    </a>
  );
};
