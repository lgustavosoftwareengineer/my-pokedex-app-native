import {Screen} from 'source/core/components';
import {styled} from 'source/core/theme';

export const ScreenWithStyle = styled(Screen)`
  background-color: ${({theme}) => theme.colors.background};
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.normal.name};
`;

export const TextInputError = styled.Text`
  font-family: ${({theme}) => theme.fonts.normal.name};
  font-size: ${({theme}) => theme.fonts.normal.size}px;
  color: ${({theme}) => theme.colors.error};
`;
