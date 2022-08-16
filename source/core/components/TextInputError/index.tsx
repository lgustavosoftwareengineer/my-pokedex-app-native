import React from 'react';
import {TextInputProps} from 'react-native';
import {TextInputErrorWithStyle} from './styles';

export const TextInputError = (props: TextInputProps) => {
  return <TextInputErrorWithStyle {...props} />;
};
