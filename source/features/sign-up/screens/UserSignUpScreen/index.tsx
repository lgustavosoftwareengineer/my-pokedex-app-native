import React, {useEffect} from 'react';
import {Button, Image} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import * as Yup from 'yup';

import {useImagePicker} from 'source/core/hooks';
import {useForm} from 'source/core/hooks';
import {
  TextInput,
  TextInputWithMask,
  TextInputError,
} from 'source/core/components';

import {ScreenWithStyle} from './styles';
import {useUser} from 'source/core/hooks/user';
import {User} from 'source/types/user';

const VALIDATION_SCHEMA = Yup.object({
  name: Yup.string().required().required('Este campo é requerido'),
  age: Yup.string().required('Este campo é requerido'),
  profileImage: Yup.string().required('Este campo é requerido'),
}).required();

const DEFAULT_FORM_VALUES: User = {
  age: '',
  name: '',
  profileImage: '',
};

const PROFILE_PHOTO_SIZE = 100;

export const UserSignUpScreen = () => {
  const {setUser} = useUser();

  const {getFieldProps, handleSubmit, isValid, setFieldValue, values, errors} =
    useForm<User>({
      initialValues: DEFAULT_FORM_VALUES,
      validationSchema: VALIDATION_SCHEMA,
      onSubmit: () => {
        setUser({...values, isLogged: true});
      },
    });

  const [image, {getImageFromLibrary}] = useImagePicker();
  const {assets = []} = image ?? {};
  const [firstImage = {}] = assets;
  const {uri = ''} = firstImage;

  const onPressOpenImageLibraryToGetUserImage = () => {
    getImageFromLibrary({
      quality: 0.5,
      mediaType: 'photo',
      selectionLimit: 1,
    });
  };

  useEffect(() => {
    setFieldValue('profileImage', uri);
  }, [uri, setFieldValue]);

  return (
    <ScreenWithStyle>
      {Boolean(values.profileImage) && (
        <>
          <Image
            source={{uri: values.profileImage}}
            style={{
              height: PROFILE_PHOTO_SIZE,
              width: PROFILE_PHOTO_SIZE,
              borderRadius: PROFILE_PHOTO_SIZE / 2,
            }}
          />
        </>
      )}

      <Button
        title="Pegar imagem"
        onPress={onPressOpenImageLibraryToGetUserImage}
      />
      {errors.profileImage && (
        <TextInputError>{errors.profileImage}</TextInputError>
      )}
      <TextInput
        placeholder="Digite aqui o seu nome"
        testID="name-input-test-id"
        {...getFieldProps('name')}
      />
      <TextInputWithMask
        type="custom"
        placeholder="Digite aqui a sua idade"
        keyboardType="number-pad"
        options={{
          mask: '99',
        }}
        testID="age-input-test-id"
        {...getFieldProps('age')}
      />
      <Button
        title="Entrar no aplicativo"
        onPress={handleSubmit}
        testID="sign-up-button-test-id"
        disabled={!isValid}
      />
    </ScreenWithStyle>
  );
};

UserSignUpScreen.navigationOptions = {} as NativeStackNavigationOptions;
