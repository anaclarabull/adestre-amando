import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';


import {
  Container, Header, Title, SubTitle
} from './styles';

const image = { uri: "https://images.pexels.com/photos/2123773/pexels-photo-2123773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };

export function Signin() {
  return (
    <>
      <ImageBackground
        source={image} resizeMode="cover" style={styles.image}
      >
        <Container>

          <Header>
            <Title>Boas vindas ao Adestre Amando!</Title>
            <SubTitle>Faça login ou cadastre-se para uma melhor experiência!</SubTitle>
          </Header>

        </Container>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  }
});