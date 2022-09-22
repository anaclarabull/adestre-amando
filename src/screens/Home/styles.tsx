import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';


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


export const SkillList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`
`;

export const Button = styled.View`
 align-items: center;
`;

export const ButtonText = styled.Text`
 color: ${({theme}) => theme.colors.white};
 font-family: ${({ theme }) => theme.fonts.bold};
font-size: ${RFValue(18)}px;
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