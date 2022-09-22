import React, { useRef, useState } from 'react';
import { TextInput, Alert } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { BackButton } from '../../components/BackButton';
import { HeaderTop } from '../../components/HeaderTop';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

import {
  Container, Title, ModalTitle, InputGroup, Input, Modal
} from './styles';
import { Button, ButtonAdd, ButtonText, SkillList } from '../Home/styles';
import { Cards } from '../../components/Cards';



export function AddSkill() {
  
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  const [skillLink, setSkillLink] = useState('');

  const navigation = useNavigation();

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

  function handleRegisterSkill(){
    const body = {
      id: 0,
     
    }

    axios.post('http://35.193.53.179:8080/api/skills', {
      name: skillName,
      version: 'adestre-amando',
      description: skillDescription,
      imageUrl: skillLink
    })
    .then(() => {
      Alert.alert("Sucesso", "Skill cadastrada com sucesso!")
      navigation.goBack();
    })
    .catch((response) => {
      console.log(response)
      Alert.alert("Erro", "Skill não cadastrada!")
    }
     
    )
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
              value={skillName}
              onChangeText={(name) => setSkillName(name)}
            />
          </Input>
          <Input>
            <TextInput
              placeholder="Descrição"
              value={skillDescription}
              onChangeText={(description) => setSkillDescription(description)}
            />
          </Input>
          <Input>
            <TextInput
              placeholder="Link imagem"
              keyboardType='url'
              value={skillLink}
              onChangeText={(link) => setSkillLink(link)}
            />
          </Input>
        </InputGroup>

        <Button>
          <ButtonAdd onPress={handleRegisterSkill}>
            <ButtonText>Cadastrar</ButtonText>
          </ButtonAdd>
        </Button>

      </Modalize>
      </>
  );
}