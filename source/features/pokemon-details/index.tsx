import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {PokemonDetailsScreen} from './screens';

export type PokemonDetailsNavigatorStackParamList = {
  PokemonDetailsScreen: any;
};

const {Navigator, Screen} =
  createNativeStackNavigator<PokemonDetailsNavigatorStackParamList>();

export const PokemonDetailsNavigator = () => {
  return (
    <Navigator>
      <Screen component={PokemonDetailsScreen} name="PokemonDetailsScreen" />
    </Navigator>
  );
};

export const PokemonDetailsNavigatorOptions =
  {} as NativeStackNavigationOptions;
