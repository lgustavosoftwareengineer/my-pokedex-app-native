import React from 'react';
import {NavigationContainer as ReactNavigationMainContainer} from '@react-navigation/native';

export type NavigationContainerProps = {
  children: React.ReactNode;
};

export const NavigationContainer = ({children}: NavigationContainerProps) => {
  return (
    <ReactNavigationMainContainer>{children}</ReactNavigationMainContainer>
  );
};
