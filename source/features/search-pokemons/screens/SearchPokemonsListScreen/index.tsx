import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const SearchPokemonsListScreen = () => {
  return (
    <View testID="SearchPokemonsListScreen">
      <Text>SearchPokemonsListScreen</Text>
    </View>
  );
};

SearchPokemonsListScreen.navigationOptions = {} as NativeStackNavigationOptions;
