import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation, CommonActions } from '@react-navigation/native'


import {
  Container,
} from './styles';

export function BackButton(){
    const theme = useTheme();

    const navigation = useNavigation();


    function back(){
      navigation.goBack();
  }
  


  return (
    <Container>
        <MaterialIcons 
            name="chevron-left"
            size={40}
            color={theme.colors.black}
            onPress={back}
        />
    </Container>
  );
}