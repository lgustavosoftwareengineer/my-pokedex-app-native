import React from 'react';
import {App} from './App';
import {CoreAppContainer} from 'source/core/components';

const AppWithCoreProvider = () => {
  return (
    <CoreAppContainer>
      <App />
    </CoreAppContainer>
  );
};

export default AppWithCoreProvider;
