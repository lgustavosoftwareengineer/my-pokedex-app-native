import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {SearchPokemonsListScreen} from './screens';

export type SearchPokemonsNavigatorStackParamList = {
  SearchPokemonsListScreen: any;
};

const {Navigator, Screen} =
  createNativeStackNavigator<SearchPokemonsNavigatorStackParamList>();

export const SearchPokemonsNavigator = () => {
  return (
    <Navigator>
      <Screen
        component={SearchPokemonsListScreen}
        name="SearchPokemonsListScreen"
      />
    </Navigator>
  );
};

export const SearchPokemonsNavigatorOptions =
  {} as NativeStackNavigationOptions;
