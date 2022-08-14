import {Screen} from 'source/core/components';
import {themedComponents} from 'source/core/theme';

export const ScreenWithStyle = themedComponents(Screen)`
  background-color: ${({theme}) => theme.colors.background};
`;

export const Text = themedComponents.Text`
  font-family: ${({theme}) => theme.fonts.normal};
`;
