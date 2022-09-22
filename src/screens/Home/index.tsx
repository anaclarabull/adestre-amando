import React from 'react';
import { Cards } from '../../components/Cards';
import { HeaderTop } from '../../components/HeaderTop';

import {
  Container, Title, SkillList, Button, ButtonAdd, ButtonText
} from './styles';


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
        data={[1, 2, 3, 4, 5]}
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