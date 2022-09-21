import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`
 flex: 1;
 background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 100px;
    justify-content: flex-end;
    padding-left: 10px;
`;

export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.medium};
 font-size: ${RFValue(30)}px;
 padding: 24px 0 10px 24px;
`;