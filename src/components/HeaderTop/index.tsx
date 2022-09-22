import React from 'react';
import Logo from '../../assets/Dog_logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation, CommonActions } from '@react-navigation/native'


import {
  Container, Navbar, ExitButton
} from './styles';

export function HeaderTop() {
  const theme = useTheme();

  const navigation = useNavigation();


  function goSignin() {
    navigation.dispatch(CommonActions.navigate({
      name: "Signin"
    }))
  }

    return (
      <Container>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Navbar>
          <Logo
            width={RFValue(80)}
            height={RFValue(80)}
          />
          <ExitButton >
            <MaterialIcons
              name="exit-to-app"
              size={30}
              color={theme.colors.black}
              onPress={goSignin}
            />
          </ExitButton>
        </Navbar>
      </Container>
    );
  }