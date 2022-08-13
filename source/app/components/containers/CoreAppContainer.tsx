import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HttpRequestProvider, ThemeProvider} from '../providers';

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
