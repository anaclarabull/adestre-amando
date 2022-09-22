import React, { useRef } from 'react';
import { View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { BackButton } from '../../components/BackButton';
import { HeaderTop } from '../../components/HeaderTop';

import {
  Container, Title, Button, ButtonAdd, ButtonText, ModalTitle, InputGroup, Input, InputText, Modal
} from './styles';

export function AddSkill() {
  const modalizeRef = useRef(null);

  function onOpen() {
    modalizeRef.current?.open();
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Container>
      <HeaderTop />
      <BackButton />
      <Title>Add treinamento</Title>
      <Button>
        <ButtonAdd onPress={onOpen}>
          <ButtonText >Cadastrar treinamento</ButtonText>
        </ButtonAdd>
      </Button>

     

    </Container>

    <Modalize
        ref={modalizeRef}
        modalHeight={350}
        snapPoint={180}
        HeaderComponent={
          <Modal>
          <ModalTitle>Cadastrar treinamento</ModalTitle>
        </Modal>
        }
      >
        
        <InputGroup>
          <Input>
            <InputText>Nome</InputText>
          </Input>
          <Input>
            <InputText>Descrição</InputText>
          </Input>
          <Input>
            <InputText>Link imagem</InputText>
          </Input>
        </InputGroup>

        <Button>
          <ButtonAdd>
            <ButtonText>Cadastrar</ButtonText>
          </ButtonAdd>
        </Button>

      </Modalize>
    </GestureHandlerRootView>
  );
}