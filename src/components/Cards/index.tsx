import React from 'react';

import PlusSvg from '../../assets/plus.svg';
// import DogImage from '../../assets/sentar.svg';

import {
  Container,
  Details,
  Title,
  About,
  Text,
  Icon,
  Level,
  LevelText,
  LevelSelect,
  Skill,
  DogImage
} from './style';

interface SkillData {
  name: string;
  description: string;
  imageUrl: string;
  level: string;
}

interface Props {
  data: SkillData;
}

export function Cards({ data } : Props) {
  return (
    <Container>
      <Details>

        <About>
          <Icon>
            <PlusSvg />
          </Icon>
          <Title>{data.name}</Title>
        </About>

        <Text>{data.description}</Text>

        <Level>
          <LevelText>Nível</LevelText>
          <LevelSelect>{data.level}</LevelSelect>
        </Level>

      </Details>

      <Skill>
        <DogImage source={{ uri: data.imageUrl }}
          resizeMode="contain"
        />
      </Skill>

    </Container>
  );
}