import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {CoreAppContainer} from 'source/core/components';

import {UserSignUpScreen} from '..';

describe('UserSignUpScreen', () => {
  it('given some sign up field empty, then the sign up button must be disabled and must appear a message inside in each input saying it is required', () => {
    render(
      <CoreAppContainer>
        <UserSignUpScreen />
      </CoreAppContainer>,
    );
    const signUpButton = screen.getByTestId('sign-up-button-test-id');

    expect(signUpButton).toBeDisabled();
  });
  it.todo(
    'given sign up field are enabled, when clicked, user must be redirect to search pokemon list screen',
  );
  it.todo(
    'given user is already sign ip, when enter in app, must be redirect to search pokemon list screen',
  );
});
