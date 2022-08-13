import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DefaultNavigationOptions} from 'source/constants';
import {
  MyPokedexNavigator,
  MyPokedexNavigatorOptions,
  PokemonDetailsNavigator,
  PokemonDetailsNavigatorOptions,
  SearchPokemonsNavigator,
  SearchPokemonsNavigatorOptions,
  SignUpNavigator,
  SignUpNavigatorOptions,
} from 'source/modules';
import {type AppNavigatorStackParamList} from 'source/types/app';

const {Navigator, Screen} =
  createNativeStackNavigator<AppNavigatorStackParamList>();

export const App = () => {
  return (
    <Navigator screenOptions={DefaultNavigationOptions}>
      <Screen
        name="SignUpNavigator"
        component={SignUpNavigator}
        options={SignUpNavigatorOptions}
      />
      <Screen
        name="SearchPokemonsNavigator"
        component={SearchPokemonsNavigator}
        options={SearchPokemonsNavigatorOptions}
      />
      <Screen
        name="MyPokedexNavigator"
        component={MyPokedexNavigator}
        options={MyPokedexNavigatorOptions}
      />
      <Screen
        name="PokemonDetailsNavigator"
        component={PokemonDetailsNavigator}
        options={PokemonDetailsNavigatorOptions}
      />
    </Navigator>
  );
};
