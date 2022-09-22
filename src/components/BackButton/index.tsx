import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
  Container,
} from './styles';

export function BackButton(){
    const theme = useTheme();
  return (
    <Container>
        <MaterialIcons 
            name="chevron-left"
            size={40}
            color={theme.colors.black}
        />
    </Container>
  );
}