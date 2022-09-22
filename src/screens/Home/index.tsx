import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import Logo from '../../assets/Dog_logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  Container, Header, Title, SkillList, Button, ButtonAdd, ButtonText
} from './styles';

import { Cards } from '../../components/Cards';
import { HeaderTop } from '../../components/HeaderTop';
import { DogImage } from '../../components/Cards/style';

export function Home() {

  const skillData = {
    name: 'Sentar',
    description: 'Comando para o pet sentar.',
    imageUrl: 'https://assets.stickpng.com/images/580b57fbd9996e24bc43bbdf.png',
    level: 'Fácil',
  }

  return (
    <Container>
      <HeaderTop/>

      <Title>Seu treinamento</Title>

      <SkillList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Cards data={skillData} />}
      />
      <Button>
        <ButtonAdd>
          <ButtonText>Add treinamento</ButtonText>
        </ButtonAdd>
      </Button> 
    </Container>
  );
}