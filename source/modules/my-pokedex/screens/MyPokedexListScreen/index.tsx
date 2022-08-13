import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const MyPokedexListScreen = () => {
  return (
    <View>
      <Text>MyPokedexListScreen</Text>
    </View>
  );
};

MyPokedexListScreen.navigationOptions = {} as NativeStackNavigationOptions;
