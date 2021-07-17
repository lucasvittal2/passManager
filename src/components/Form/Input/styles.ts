import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../../global/theme';

export const Container = styled.View`
  margin-top: ${RFValue(26)}px;
`;

export const Label = styled.Text`
  font-family: 'Poppins_500Medium';
  font-size: ${RFValue(14)}px;
  color: #4E3975;
  margin-bottom: 8px;
`;

export const Error = styled.Text`
  color: ${theme.colors.errorText};
  margin-bottom: ${RFValue(4)}px;
`;

export const FormInput = styled(TextInput)`
  padding: ${RFValue(15)}px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.text};
  background-color: ${theme.colors.thirdBackground};
  font-size: ${(RFValue(14))}px;
`;