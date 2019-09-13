import styled from 'styled-components/native';
import { widthPercentageToDp, heightPercentageToDp } from "../utils";

export const Container = styled.View`
  flex: 1;
  background: #F5F5F5;
`;

export const Post = styled.View`
  margin-top: 10px;
  background: #FFF;
  elevation: 2;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${heightPercentageToDp('7%')};
  height: ${heightPercentageToDp('7%')};
  border-radius: 50px;
  margin-right: 10px;
  background: #0E76A8;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const Original = styled.Image`
  width: 100%;
  aspectRatio: 1;
  background: red;
`;
