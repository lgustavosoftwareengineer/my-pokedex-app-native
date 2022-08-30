import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {faker} from '@faker-js/faker';
import {CoreAppContainer} from 'source/core/components';
import {UserSignUpScreen} from '..';
import {useImagePicker} from 'source/core/hooks/useImagePicker';
import {App} from 'source/app/App';
import {useUser} from 'source/core/hooks/user';
import {User} from 'source/types/user';

jest.mock('source/core/hooks/useImagePicker');
const mockedUseImagePicker = jest.mocked(useImagePicker);

describe('UserSignUpScreen', () => {
  const fakerUser: User = {
    name: faker.name.firstName(),
    profileImage: faker.image.avatar(),
    age: String(faker.datatype.number(99)),
    isLogged: true,
  };

  it('given some sign up field empty, then the sign up button must be disabled and must appear a message inside in each input saying it is required', async () => {
    mockedUseImagePicker.mockReturnValue([
      {assets: [{uri: ''}]},
      {
        getImageFromCamera: jest.fn(),
        getImageFromLibrary: jest.fn(),
      },
    ]);
    render(
      <CoreAppContainer>
        <UserSignUpScreen />
      </CoreAppContainer>,
    );
    const nameInput = screen.getByTestId('name-input-test-id');
    const ageInput = screen.getByTestId('age-input-test-id');
    const signUpButton = screen.getByTestId('sign-up-button-test-id');

    fireEvent.changeText(nameInput, '');
    fireEvent.changeText(ageInput, '');

    const inputsErrors = await screen.findAllByText('Este campo é requerido');
    expect(inputsErrors).toHaveLength(3);
    expect(signUpButton).toBeDisabled();
  });

  it('given sign up field are enabled, when clicked, user must be redirect to search pokemon list screen', async () => {
    mockedUseImagePicker.mockReturnValue([
      {assets: [{uri: fakerUser.profileImage}]},
      {
        getImageFromCamera: jest.fn(),
        getImageFromLibrary: jest.fn(),
      },
    ]);
    render(
      <CoreAppContainer>
        <App />
      </CoreAppContainer>,
    );
    const nameInput = screen.getByTestId('name-input-test-id');
    const ageInput = screen.getByTestId('age-input-test-id');
    const signUpButton = screen.getByTestId('sign-up-button-test-id');

    fireEvent.changeText(nameInput, fakerUser.name);
    fireEvent.changeText(ageInput, fakerUser.age);
    expect(signUpButton).toBeEnabled();
    fireEvent.press(signUpButton);

    const searchPokemonListScreen = await screen.findByTestId(
      'SearchPokemonsListScreen',
    );
    expect(searchPokemonListScreen).toBeDefined();
  });

  it('given user is already sign ip, when enter in app, must be redirect to search pokemon list screen', async () => {
    act(() =>
      useUser.setState({
        user: fakerUser,
      }),
    );
    mockedUseImagePicker.mockReturnValue([
      {assets: [{uri: fakerUser.profileImage}]},
      {
        getImageFromCamera: jest.fn(),
        getImageFromLibrary: jest.fn(),
      },
    ]);
    render(
      <CoreAppContainer>
        <App />
      </CoreAppContainer>,
    );

    const searchPokemonListScreen = await screen.findByTestId(
      'SearchPokemonsListScreen',
    );
    expect(searchPokemonListScreen).toBeDefined();
  });
});
