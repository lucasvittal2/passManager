import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../global/theme';

export const Container = styled(TouchableOpacity)`
  background-color: ${theme.colors.secondBackground};

  padding: 15px 0;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;
export const ButtonText = styled.Text`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${theme.colors.text};
`;