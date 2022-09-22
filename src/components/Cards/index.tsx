import React from 'react';

import PlusSvg from '../../assets/trash.svg';
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
  DogImage,
  ImageContainer
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
        <ImageContainer>
        <DogImage source={{ uri: 'https://static.vecteezy.com/system/resources/previews/001/200/033/non_2x/dog-png.png' }}
          resizeMode="contain"
        />
        </ImageContainer>
      </Skill>

    </Container>
  );
}