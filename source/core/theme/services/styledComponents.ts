import * as styledComponents from 'styled-components/native';

const {
  default: themedComponents,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<styledComponents.DefaultTheme>;
export {css, ThemeProvider, themedComponents};
