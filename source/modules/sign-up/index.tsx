import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {UserSignUpScreen} from './screens';

export type SignUpNavigatorStackParamList = {
  UserSignUpScreen: any;
};

const {Navigator, Screen} =
  createNativeStackNavigator<SignUpNavigatorStackParamList>();

export const SignUpNavigator = () => {
  return (
    <Navigator>
      <Screen component={UserSignUpScreen} name="UserSignUpScreen" />
    </Navigator>
  );
};

export const SignUpNavigatorOptions = {} as NativeStackNavigationOptions;
