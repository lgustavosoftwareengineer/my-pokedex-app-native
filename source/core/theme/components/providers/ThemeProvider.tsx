import React from 'react';
import {ThemeProvider as StyledComponentsThemeProvider} from '../../services';

import {Theme} from '../../constants/themeConstant';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  return (
    <StyledComponentsThemeProvider theme={Theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
