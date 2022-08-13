import React from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DEFAULT_BEHAVIOR} from './constants';
import {styles} from './styles';
import {ScreenProps} from './types';

export const Screen = ({
  keyboardAvoidingViewProps = {},
  style,
  ...props
}: ScreenProps) => {
  const defaultSafeAreaViewStyle = StyleSheet.flatten([
    styles.container,
    style,
  ]);

  return (
    <KeyboardAvoidingView
      {...keyboardAvoidingViewProps}
      behavior={DEFAULT_BEHAVIOR}
      style={styles.container}>
      <SafeAreaView {...props} style={defaultSafeAreaViewStyle} />
    </KeyboardAvoidingView>
  );
};
