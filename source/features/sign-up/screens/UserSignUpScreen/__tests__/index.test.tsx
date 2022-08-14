import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

import {CoreAppContainer} from 'source/core/components';

import {UserSignUpScreen} from '..';

describe('UserSignUpScreen', () => {
  it('given some sign up field empty, then the sign up button must be disabled and must appear a message inside in each input saying it is required', async () => {
    render(
      <CoreAppContainer>
        <UserSignUpScreen />
      </CoreAppContainer>,
    );
    const nameInput = screen.getByTestId('name-input-test-id');
    const ageInput = screen.getByTestId('age-input-test-id');
    const signUpButton = screen.getByTestId('sign-up-button-test-id');

    fireEvent.changeText(nameInput, undefined);
    fireEvent.changeText(ageInput, undefined);

    const inputsErrors = await screen.findAllByText('Este campo é requerido');
    expect(inputsErrors).toHaveLength(2);
    expect(signUpButton).toBeDisabled();
  });
  it.todo(
    'given sign up field are enabled, when clicked, user must be redirect to search pokemon list screen',
  );
  it.todo(
    'given user is already sign ip, when enter in app, must be redirect to search pokemon list screen',
  );
});
