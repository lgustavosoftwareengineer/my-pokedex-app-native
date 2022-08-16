import React from 'react';
import {
  TextInputMask as NativeTextInputMask,
  TextInputMaskProps as NativeTextInputMaskProps,
} from 'react-native-masked-text';
import {TextInputError} from '../TextInputError';

export type TextInputWithMaskProps = {error: string} & NativeTextInputMaskProps;

export const TextInputWithMask = ({
  error,
  ...props
}: TextInputWithMaskProps) => {
  return (
    <>
      <NativeTextInputMask {...props} />
      {error && <TextInputError>{error}</TextInputError>}
    </>
  );
};
