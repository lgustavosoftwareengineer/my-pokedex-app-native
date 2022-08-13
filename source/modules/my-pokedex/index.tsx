import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {MyPokedexListScreen} from './screens';

export type MyPokedexNavigatorStackParamList = {
  MyPokedexListScreen: any;
};

const {Navigator, Screen} =
  createNativeStackNavigator<MyPokedexNavigatorStackParamList>();

export const MyPokedexNavigator = () => {
  return (
    <Navigator>
      <Screen component={MyPokedexListScreen} name="MyPokedexListScreen" />
    </Navigator>
  );
};

export const MyPokedexNavigatorOptions = {} as NativeStackNavigationOptions;
