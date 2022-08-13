import React from 'react';
import {KeyboardAvoidingViewProps} from 'react-native';
import {NativeSafeAreaViewProps} from 'react-native-safe-area-context';

export type BehaviorType = 'height' | 'position' | 'padding';

export type ScreenProps = {
  children: React.ReactNode;
  keyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
} & NativeSafeAreaViewProps;
