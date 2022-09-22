import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
height: 56px;
width: 50px;
`;
export const InputText = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.input_bg};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;
    height: 51px;
    width: 100%;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 15px;
`;