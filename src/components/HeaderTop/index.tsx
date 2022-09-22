import React from 'react';
import Logo from '../../assets/Dog_logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';



import {
  Container,
} from './styles';

export function HeaderTop(){
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
        <Logo
          width={RFValue(80)}
          height={RFValue(80)}
        />
    </Container>
  );
}