import React from 'react';
import {View, Text, Button} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {useUser} from 'source/core/hooks/user';

export const SearchPokemonsListScreen = () => {
  const {logout} = useUser();

  return (
    <View testID="SearchPokemonsListScreen">
      <Text>SearchPokemonsListScreen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

SearchPokemonsListScreen.navigationOptions = {} as NativeStackNavigationOptions;
