import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { BackButton } from '../../components/BackButton';
import { HeaderTop } from '../../components/HeaderTop';

import {
  Container, Title, ModalTitle, InputGroup, Input, InputText, Modal
} from './styles';
import { Button, ButtonAdd, ButtonText, SkillList } from '../Home/styles';
import { Cards } from '../../components/Cards';



export function AddSkill() {
  const modalizeRef = useRef(null);

  function onOpen() {
    modalizeRef.current?.open();
  }


  const skillData = {
    name: 'Sentar',
    description: 'Comando para o pet sentar.',
    imageUrl: 'https://assets.stickpng.com/images/580b57fbd9996e24bc43bbdf.png',
    level: 'Fácil',
  }

  return (
    <>
      <Container>
        <HeaderTop />
        <BackButton />
        <Title>Add treinamento</Title>

        <SkillList
          data={[1, 2, 3]}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => <Cards data={skillData} />}
        />

        <Button>
          <ButtonAdd onPress={onOpen}>
            <ButtonText >Cadastrar treinamento</ButtonText>
          </ButtonAdd>
        </Button>



      </Container>
      <Modalize
        ref={modalizeRef}
        modalHeight={500}
        snapPoint={350}
        HeaderComponent={
          <Modal>
            <ModalTitle>Cadastrar treinamento</ModalTitle>
          </Modal>
        }
      >
        <InputGroup>
          <Input>
            <TextInput
              placeholder="Nome"
            />
          </Input>
          <Input>
            <TextInput
              placeholder="Descrição"
            />
          </Input>
          <Input>
            <TextInput
              placeholder="Link imagem"
              keyboardType='url'
            />
          </Input>
        </InputGroup>

        <Button>
          <ButtonAdd>
            <ButtonText>Cadastrar</ButtonText>
          </ButtonAdd>
        </Button>

      </Modalize>
      </>
  );
}