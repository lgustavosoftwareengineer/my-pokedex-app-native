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
} from 'source/features';
import {type AppNavigatorStackParamList} from 'source/types/app';
import {useUser} from 'source/core/hooks/user';

const {Navigator, Screen} =
  createNativeStackNavigator<AppNavigatorStackParamList>();

export const App = () => {
  const {user} = useUser();
  const {isLogged} = user;

  console.log({isLogged});

  return (
    <Navigator screenOptions={DefaultNavigationOptions}>
      {!isLogged ? (
        <Screen
          name="SignUpNavigator"
          component={SignUpNavigator}
          options={SignUpNavigatorOptions}
        />
      ) : (
        <Screen
          name="SearchPokemonsNavigator"
          component={SearchPokemonsNavigator}
          options={SearchPokemonsNavigatorOptions}
        />
      )}
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
