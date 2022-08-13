import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const PokemonDetailsScreen = () => {
  return (
    <View>
      <Text>PokemonDetailsScreen</Text>
    </View>
  );
};

PokemonDetailsScreen.navigationOptions = {} as NativeStackNavigationOptions;
