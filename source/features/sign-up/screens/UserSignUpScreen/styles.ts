import {Screen} from 'source/core/components';
import {styled} from 'source/core/theme';

export const ScreenWithStyle = styled(Screen)`
  background-color: ${({theme}) => theme.colors.background};
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.normal.name};
`;
