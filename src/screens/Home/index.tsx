import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/Dog_logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container, Header, Title
} from './styles';

import { Cards } from '../../components/Cards';

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo 
          width={RFValue(80)}
          height={RFValue(80)}
        />
      </Header>
      <Title>Seu treinamento</Title>
      <Cards />
    </Container>
  );
}