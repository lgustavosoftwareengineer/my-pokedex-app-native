import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {faker} from '@faker-js/faker';
import {CoreAppContainer} from 'source/core/components';
import {UserSignUpScreen} from '..';
import {useImagePicker} from 'source/core/hooks/useImagePicker';
import {App} from 'source/app/App';

jest.mock('source/core/hooks/useImagePicker');
const mockedUseImagePicker = jest.mocked(useImagePicker);

describe('UserSignUpScreen', () => {
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
      {assets: [{uri: faker.image.avatar()}]},
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

    fireEvent.changeText(nameInput, faker.name.firstName());
    fireEvent.changeText(ageInput, String(faker.datatype.number(99)));
    expect(signUpButton).toBeEnabled();
    fireEvent.press(signUpButton);

    const searchPokemonListScreen = await screen.findByTestId(
      'SearchPokemonsListScreen',
    );
    expect(searchPokemonListScreen).toBeDefined();
  });
  it.todo(
    'given user is already sign ip, when enter in app, must be redirect to search pokemon list screen',
  );
});
