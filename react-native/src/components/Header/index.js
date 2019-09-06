import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Circle } from './styles';

import Input from '../Input';

export default function Header() {
  return (
    <Container>
      <Circle>

      </Circle>
      <Input />
      <Icon name='chat' size={40} color='#FFF' />
    </Container>
  );
}
