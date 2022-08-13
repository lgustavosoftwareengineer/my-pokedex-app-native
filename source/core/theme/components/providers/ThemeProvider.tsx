import React from 'react';

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  return <>{children}</>;
};
