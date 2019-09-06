import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "../../utils";

export const Container = styled.View`
  width: ${widthPercentageToDp('100%')};
  height: ${heightPercentageToDp('8%')};
  background: #0E76A8;
  flex-direction: row;
  align-items: center;
  padding-left: ${widthPercentageToDp('5%')};
  padding-right: ${widthPercentageToDp('5%')};
`;

export const Circle = styled.TouchableOpacity`
  width: ${heightPercentageToDp('6%')};
  height: ${heightPercentageToDp('6%')};
  background: #FFF;
  border-radius: 50;
  justify-content: center;
`;