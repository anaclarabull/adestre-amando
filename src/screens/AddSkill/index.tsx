import React from 'react';
import { BackButton } from '../../components/BackButton';
import { HeaderTop } from '../../components/HeaderTop';

import {
  Container,
} from './styles';

export function AddSkill(){
  return (
    <Container>
        <HeaderTop/>
        <BackButton/>
    </Container>
  );
}