import React from 'react';
import {Button} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {AppNavigatorStackParamList} from 'source/types/app';

import {ScreenWithStyle, Text} from './styles';

export const UserSignUpScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppNavigatorStackParamList>>();

  return (
    <ScreenWithStyle>
      <Text>UserSignUpScreen</Text>
      <Button
        title="Entrar no aplicativo"
        onPress={() =>
          navigation.navigate('SearchPokemonsNavigator', {
            screen: 'SearchPokemonsListScreen',
          })
        }
      />
    </ScreenWithStyle>
  );
};

UserSignUpScreen.navigationOptions = {} as NativeStackNavigationOptions;
