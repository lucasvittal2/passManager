import React, { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { SearchBar } from '../../components/SearchBar';
import { LoginDataItem } from '../../components/LoginDataItem';

import {
  Container,
  LoginList,
  EmptyListContainer,
  
  EmptyListMessage
} from './styles';

import { useStorageData } from '../../hooks/useStorageData'

interface LoginDataProps {
  id: string;
  title: string;
  email: string;
  password: string;
};
import { KEY } from '../../config/storage'
type LoginListDataProps = LoginDataProps[];

export function Home() {
  const [searchListData, setSearchListData] = useState<LoginListDataProps>([]);
  const [data, setData] = useState<LoginListDataProps>([]);
  const { getLogins}  = useStorageData();


  async function loadData() {
    const dataFromStorage = await getLogins(); 
    const logins  =  dataFromStorage ? JSON.parse(dataFromStorage): [];
    console.log(logins);
    setSearchListData(logins);
    setData(logins);
  }
  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(useCallback(() => {
    loadData();
  }, []));

  function handleFilterLoginData(search: string) {
    const filteredLogins = data.filter( login => {

      const treatedWord = login.title.trim();
      return treatedWord != null && treatedWord !== '' && (treatedWord.toLowerCase()).includes(search.toLowerCase())
      })
      setSearchListData(filteredLogins);
  }

  return (
    <Container>
      <SearchBar
        placeholder="Pesquise pelo nome do serviço"
        onChangeText={(value) => handleFilterLoginData(value)}
      />

      <LoginList
        keyExtractor={(item) => item.id}
        data={searchListData}
        ListEmptyComponent={(
          <EmptyListContainer>
            <EmptyListMessage>Nenhum item a ser mostrado</EmptyListMessage>
          </EmptyListContainer>
        )}
        renderItem={({ item: loginData }) => {
          return <LoginDataItem
            title={loginData.title}
            email={loginData.email}
            password={loginData.password}
          />
        }}
      />
    </Container>
  )
}