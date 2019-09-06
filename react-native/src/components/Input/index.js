import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Content } from './styles';

export default function Input() {
  return (
    <Container>
      <Icon name='search' size={22} />
      <Content 
        placeholder='Pesquisar'
      />
    </Container>
  );
}
