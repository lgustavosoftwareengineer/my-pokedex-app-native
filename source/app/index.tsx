import React from 'react';
import {App} from './App';
import {CoreAppContainer} from './components';

const AppWithCoreProvider = () => {
  return (
    <CoreAppContainer>
      <App />
    </CoreAppContainer>
  );
};

export default AppWithCoreProvider;
