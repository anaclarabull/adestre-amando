import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 padding:  0 24px;

`;

export const Header = styled.View`
    width: 100%;
    margin-top: 55px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(45)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
`;