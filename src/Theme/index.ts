import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

const colors = {
  primaryFontColor: {
    lightMode: baseTheme.colors.gray['600'],
    darkMode: baseTheme.colors.gray['200'],
  },
  secondaryFontColor: {
    lightMode: baseTheme.colors.gray['600'],
    darkMode: baseTheme.colors.gray['400'],
  },
};

const customTheme = extendTheme({
  colors: colors,
  styles: {
    global: () => ({
      body: {
        color: colors.primaryFontColor.lightMode,
      },
    }),
  },
});

export default customTheme