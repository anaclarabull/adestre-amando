import React, {useState} from 'react';
import { Alert, ImageBackground, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { InputText } from '../../components/Input/styles';
import { Button, ButtonAdd, ButtonText } from '../Home/styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, CommonActions } from '@react-navigation/native'


import {
  Container, Header, Title, SubTitle
} from './styles';

const image = { uri: "https://images.pexels.com/photos/2123773/pexels-photo-2123773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };

interface Login {
  user: string;
  password: string;
}

export function Signin() {

  const login = {
    user: "anaclara@gmail.com",
    password: "123456"
  } as Login;

  const [inputPassword, setInputPassword] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigation();

  function goRegistration() {
    navigation.dispatch(CommonActions.navigate({
      name: "Registration"
    }))
  }
  function goHome() {
    navigation.dispatch(CommonActions.navigate({
      name: "Home"
    }))
  }

  function handleSignIn(){
    if (inputPassword !== login.password && inputEmail !== login.user){
      Alert.alert("Erro login", "Usuário ou senha incorretos!")
      return;
    } else {
      goHome();
    }
  }

  return (
    <>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <Container>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />

          <Header>
            <Title>Boas vindas ao Adestre Amando!</Title>
            <SubTitle>Faça login ou cadastre-se para uma melhor experiência!</SubTitle>
          </Header>

                
          <InputText placeholder="E-mail" value={inputEmail} onChangeText={(emailText) => setInputEmail(emailText)}/>

          <View style={styles.container}>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={inputPassword}
                onChangeText={(texto) => setInputPassword(texto)}
                secureTextEntry={hidePass}
              />
              <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                <Ionicons name="eye" color="" size={25}/>
                :
                <Ionicons name="eye-off" color="" size={25}/>
                }
              </TouchableOpacity>
            </View>
          </View>

          <Button>
            <ButtonAdd>
              <ButtonText onPress={handleSignIn}>Entrar</ButtonText>
            </ButtonAdd>
            <ButtonAdd style={styles.button}>
              <ButtonText style={styles.buttonText} onPress={goRegistration}>Cadastrar</ButtonText>
            </ButtonAdd>
          </Button>

        </Container>

      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FFFC78",
  },
  buttonText: {
    color: "#000",
  },
  container:{
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 15,
  },
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    alignItems: 'center',
  },
  input: {
    width: '85%',
    fontSize: 16,
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  
});