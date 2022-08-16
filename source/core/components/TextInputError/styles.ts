import {styled} from 'source/core/theme';

export const TextInputErrorWithStyle = styled.Text`
  font-family: ${({theme}) => theme.fonts.normal.name};
  font-size: ${({theme}) => theme.fonts.normal.size}px;
  color: ${({theme}) => theme.colors.error};
`;
