import React from 'react';
import {Button, TextInput} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {TextInputMask} from 'react-native-masked-text';

import {AppNavigatorStackParamList} from 'source/types/app';

import {ScreenWithStyle, TextInputError} from './styles';

type FormData = {
  name: string;
  age: string;
};

const ValidationSchema = Yup.object({
  name: Yup.string().required().required('Este campo é requerido'),
  age: Yup.string().required('Este campo é requerido'),
}).required();

const DEFAULT_FORM_VALUES: FormData = {
  age: '',
  name: '',
};

export const UserSignUpScreen = () => {
  const navigation =
    useNavigation<NavigationProp<AppNavigatorStackParamList>>();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm<FormData>({
    defaultValues: DEFAULT_FORM_VALUES,
    resolver: yupResolver(ValidationSchema),
    mode: 'onChange',
  });

  const onSubmit = () =>
    navigation.navigate('SearchPokemonsNavigator', {
      screen: 'SearchPokemonsListScreen',
    });

  return (
    <ScreenWithStyle>
      <Controller
        name="name"
        control={control}
        render={({field, fieldState}) => (
          <>
            <TextInput
              placeholder="Digite aqui o seu nome"
              testID="name-input-test-id"
              {...{
                ...field,
                onChangeText: field.onChange,
              }}
            />
            <TextInputError>{fieldState.error?.message}</TextInputError>
          </>
        )}
      />

      <Controller
        name="age"
        control={control}
        render={({field, fieldState}) => (
          <>
            <TextInputMask
              type="custom"
              placeholder="Digite aqui a sua idade"
              testID="age-input-test-id"
              keyboardType="number-pad"
              options={{
                mask: '99',
              }}
              {...{
                ...field,
                onChangeText: field.onChange,
              }}
            />
            <TextInputError>{fieldState.error?.message}</TextInputError>
          </>
        )}
      />

      <Button
        title="Entrar no aplicativo"
        onPress={handleSubmit(onSubmit)}
        testID="sign-up-button-test-id"
        disabled={!isValid}
      />
    </ScreenWithStyle>
  );
};

UserSignUpScreen.navigationOptions = {} as NativeStackNavigationOptions;
