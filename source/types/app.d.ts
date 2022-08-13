import {NavigatorScreenParams} from '@react-navigation/native';

import {
  MyPokedexNavigatorStackParamList,
  PokemonDetailsNavigatorStackParamList,
  SearchPokemonsNavigatorStackParamList,
  SignUpNavigatorStackParamList,
} from 'source/features';

export type AppNavigatorStackParamList = {
  MyPokedexNavigator: NavigatorScreenParams<MyPokedexNavigatorStackParamList>;
  PokemonDetailsNavigator: NavigatorScreenParams<PokemonDetailsNavigatorStackParamList>;
  SearchPokemonsNavigator: NavigatorScreenParams<SearchPokemonsNavigatorStackParamList>;
  SignUpNavigator: NavigatorScreenParams<SignUpNavigatorStackParamList>;
};
