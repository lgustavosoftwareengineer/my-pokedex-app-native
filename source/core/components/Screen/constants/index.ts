import {Platform} from 'react-native';
import {BehaviorType} from '../types';

export const DEFAULT_BEHAVIOR = Platform.select<BehaviorType>({
  ios: 'padding',
});
