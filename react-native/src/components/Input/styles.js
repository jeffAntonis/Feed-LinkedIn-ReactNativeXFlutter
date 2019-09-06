import styled from 'styled-components/native';

import { widthPercentageToDp, heightPercentageToDp } from "../../utils";

export const Container = styled.View`
  flex: 1;
  height: ${heightPercentageToDp('6%')};
  background: #FFF;
  flex-direction: row;
  align-items: center;
  padding-left: ${widthPercentageToDp('2%')};
  padding-right: ${widthPercentageToDp('2%')};
  margin-left: ${widthPercentageToDp('2%')};
  margin-right: ${widthPercentageToDp('2%')};
  border-radius: 4px;
  elevation: 2px;
`;

export const Content = styled.TextInput`
  flex: 1;
  padding-left: 6px;
`;
