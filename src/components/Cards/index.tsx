import React from 'react';

import PlusSvg from '../../assets/plus.svg';
import DogImage from '../../assets/sentar.svg';

import {
  Container,
  Details,
  Title,
  About,
  Text,
  Icon,
  Level,
  LevelText,
  Skill,
} from './style';

export function Cards() {
  return (
    <Container>
      <Details>

        <About>
          <Icon>
            <PlusSvg />
          </Icon>
          <Title>Sentar</Title>
        </About>

        <Text>Comando para o pet sentar.</Text>

        <Level>
          <LevelText>Nível</LevelText>
          {/* LevelIconStar */}
        </Level>

      </Details>

      <Skill>
        <DogImage />
      </Skill>
      
    </Container>
  );
}