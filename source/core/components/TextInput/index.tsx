import React from 'react';
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import {TextInputError} from '../TextInputError';

export type TextInputProps = {
  error: string;
} & NativeTextInputProps;

export const TextInput = ({error, ...props}: TextInputProps) => {
  return (
    <>
      <NativeTextInput {...props} />
      {error && <TextInputError>{error}</TextInputError>}
    </>
  );
};
