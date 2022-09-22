import React, { useState } from 'react';
import { ImageBackground, StatusBar, StyleSheet, TextInput, TouchableOpacity, Alert, Modal, Text, Pressable, View } from 'react-native';
import { InputText } from '../../components/Input/styles';
import { Button, ButtonAdd, ButtonText } from '../Home/styles';
import { Ionicons } from '@expo/vector-icons';


import {
  Container, Header, Title, SubTitle
} from './styles';
import { BackButton } from '../../components/BackButton';

const image = { uri: "https://images.pexels.com/photos/2123773/pexels-photo-2123773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" };

export function Registration() {

  const [input, setInput] = useState('');
  const [inputConfirm, setInputConfirm] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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
            <BackButton />
            <Title>Cadastre-se no Adestre Amando!</Title>
            <SubTitle>Cadastre-se</SubTitle>
          </Header>

          <InputText placeholder="E-mail" />

          <View style={styles.container}>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder="Senha"
                value={input}
                onChangeText={(texto) => setInput(texto)}
                secureTextEntry={hidePass}
              />
              <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                  <Ionicons name="eye" color="" size={25} />
                  :
                  <Ionicons name="eye-off" color="" size={25} />
                }
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder="Confirmar senha"
                value={inputConfirm}
                onChangeText={(textoConfirm) => setInputConfirm(textoConfirm)}
                secureTextEntry={hidePass}
              />
              <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                {hidePass ?
                  <Ionicons name="eye" color="" size={25} />
                  :
                  <Ionicons name="eye-off" color="" size={25} />
                }
              </TouchableOpacity>
            </View>
          </View>



          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>CADASTRO REALIZADO!</Text>
                  <Pressable
                    style={[styles.buttons, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>OK</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <Button>
              <ButtonAdd>
                <Pressable
                  onPress={() => setModalVisible(true)}
                >
                  <ButtonText>Cadastrar</ButtonText>
                </Pressable>
              </ButtonAdd>

            </Button>

          </View>
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
  container: {
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttons: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});