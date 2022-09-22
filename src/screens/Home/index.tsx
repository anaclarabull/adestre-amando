import React from 'react';
import { StatusBar } from 'react-native';
import Logo from '../../assets/Dog_logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container, Header, Title, SkillList
} from './styles';

import { Cards } from '../../components/Cards';

export function Home() {

  const skillData = {
    name: 'Sentar',
    description: 'Comando para o pet sentar.',
    imageUrl: 'https://image.cachorrogato.com.br/imagens/topos/topo_138_1375217615.png',
    level: 'Fácil',
  }

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

      <SkillList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Cards data={skillData} />}
      />

    </Container>
  );
}