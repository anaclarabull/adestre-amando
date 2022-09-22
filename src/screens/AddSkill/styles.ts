import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
 background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.medium};
 font-size: ${RFValue(30)}px;
 padding: 2px 0 10px 24px;
`;

export const ModalTitle = styled.Text`
 font-family: ${({ theme }) => theme.fonts.semiBold};
 font-size: ${RFValue(20)}px;

`;

export const InputGroup = styled.View`
 align-items: center;
`;

export const Input = styled.View`
background-color: ${({theme}) => theme.colors.input_bg};
 width: 90%;
 height: 50px;
 margin-bottom: 15px;
 border-radius: 15px;
 justify-content: center;
 padding-left: 20px;
`;

export const InputText = styled.TextInput`
 
`;
export const Modal = styled.View`
 align-items: center;
 padding: 20px;
 
`;
