import React from 'react';
import {Text} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Screen} from 'source/core/components';

export const UserSignUpScreen = () => {
  return (
    <Screen>
      <Text>UserSignUpScreen</Text>
    </Screen>
  );
};

UserSignUpScreen.navigationOptions = {} as NativeStackNavigationOptions;
