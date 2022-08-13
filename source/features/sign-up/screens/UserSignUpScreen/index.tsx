import React from 'react';
import {Button, Text} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Screen} from 'source/core/components';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppNavigatorStackParamList} from 'source/types/app';

export const UserSignUpScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppNavigatorStackParamList>>();

  return (
    <Screen>
      <Text>UserSignUpScreen</Text>
      <Button
        title="Entrar no aplicativo"
        onPress={() =>
          navigation.navigate('SearchPokemonsNavigator', {
            screen: 'SearchPokemonsListScreen',
          })
        }
      />
    </Screen>
  );
};

UserSignUpScreen.navigationOptions = {} as NativeStackNavigationOptions;
