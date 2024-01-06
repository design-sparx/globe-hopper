import {
  BrandVariants,
  Button,
  createDarkTheme,
  createLightTheme,
  FluentProvider,
  Theme,
} from '@fluentui/react-components';

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

// @ts-ignore
const darkTheme: Theme = {
  ...createDarkTheme(myNewTheme),
  ...myTheme,
};

function App() {
  return (
    <FluentProvider theme={lightTheme}>
      <Button appearance="primary" size="large">
        Get started
      </Button>
      <h1>Hello</h1>
    </FluentProvider>
  );
}

export default App;
