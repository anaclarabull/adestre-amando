import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'
import { Image } from 'react-native';

export const Container = styled.View`
 flex: 1;
 width: 100%;
 height: ${RFValue(129)}px;

 background-color: ${({theme}) => theme.colors.white};
 flex-direction: row;
 justify-content: space-between;
 align-items: center;

 margin-bottom: 15px;
 border-radius: 15px;
 
`;

export const Details = styled.View`
    margin-right: 10px;
    padding: 10px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.semiBold};
    font-size: ${RFValue(20)}px;
`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

export const Text = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`;

export const Icon = styled.View`
    margin-right: 10px;
`;

export const LevelSelect = styled.Text`
    
`;
export const DogImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Level = styled.View`
    flex-direction: row;
    padding-top: 10px;
`;

export const LevelText = styled.Text`
    font-family: ${({theme}) => theme.fonts.semiBold};
    font-size: ${RFValue(12)}px;
    padding-right: 10px;
`;

export const Skill = styled.View`
    width: 100%;
    height: 100%;
`;

export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: ${RFValue(84)}px;
    height: ${RFValue(129)}px;
    border-radius: 15px;
`;
