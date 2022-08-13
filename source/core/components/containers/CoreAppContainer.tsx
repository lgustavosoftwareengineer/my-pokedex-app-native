import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ThemeProvider} from 'source/core/theme';

import {HttpRequestProvider} from '../providers';

export type CoreAppContainerProps = {
  children: React.ReactNode;
};

export const CoreAppContainer = ({children}: CoreAppContainerProps) => {
  return (
    <HttpRequestProvider>
      <ThemeProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </HttpRequestProvider>
  );
};
