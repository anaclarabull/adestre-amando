import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 
`;

export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.medium};
 font-size: ${RFValue(30)}px;
 padding: 24px 0 10px 24px;
`;

export const Button = styled.View`
 align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
 width: 90%;
 height: 51px;

 background-color: ${({theme}) => theme.colors.black};
 align-items: center;

 padding: 10px;
 margin-bottom: 15px;
 border-radius: 15px;

`;

export const ButtonText = styled.Text`
 color: ${({theme}) => theme.colors.white};
 font-family: ${({ theme }) => theme.fonts.bold};
 font-size: ${RFValue(18)}px;
align-items: center;
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
`;

export const InputText = styled.TextInput`
 
`;
export const Modal = styled.View`
 align-items: center;
 padding: 20px;
 
`;
