import {
  BrandVariants,
  createDarkTheme,
  createLightTheme,
  FluentProvider,
  Theme,
} from '@fluentui/react-components';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const myNewTheme: BrandVariants = {
  10: '#050202',
  20: '#231212',
  30: '#3B1B1C',
  40: '#502224',
  50: '#65292C',
  60: '#7B3034',
  70: '#92363C',
  80: '#AA3D45',
  90: '#C2444E',
  100: '#DA4A57',
  110: '#F05462',
  120: '#F66F75',
  130: '#FB8688',
  140: '#FE9D9D',
  150: '#FFB4B2',
  160: '#FFC9C8',
};

const myTheme = {
  fontFamilyBase: 'Nunito Sans, sans-serif',
};

const lightTheme: Theme = {
  ...createLightTheme(myNewTheme),
  ...myTheme,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const darkTheme: Theme = {
  ...createDarkTheme(myNewTheme),
  ...myTheme,
};

function App() {
  return (
    <FluentProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </FluentProvider>
  );
}

export default App;
