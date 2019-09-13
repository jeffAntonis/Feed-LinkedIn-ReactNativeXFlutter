import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';

import { Container, Post, Header, Avatar, Name, Description, Original } from './styles';
import HeaderComponent from '../components/Header';

import config from '../config';
import api from '../services/api';

export default function pages() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFeed();
  }, []);

  async function getFeed() {
    try {
      const response = await api.get(`top-headlines?country=pt&apiKey=${config.API_KEY}`);

      setData(response.data.articles);
    } catch (err) {
      alert(JSON.stringify(err));
    }
  }

  function renderRow(item){
    return (
      <Post>
        <Header>
          <Avatar  />
          <Name>{item.author}</Name>
        </Header>   
        <Description>
          {item.description}
        </Description>
        <Original source={{ uri: item.urlToImage }} resizeMode='stretch' resizeMethod='resize'  />
      </Post>
    );
  }

  return (
    <Container>
      <HeaderComponent />
      <FlatList 
        keyExtractor={post => String(post.source.id)}
        data={data}
        renderItem={({ item }) => renderRow(item)}
      />
    </Container>
  );
}
