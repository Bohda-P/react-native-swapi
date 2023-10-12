import styled from 'styled-components/native';
import { Heart, HeartFilled } from '../../assets/svg';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  border: 1px solid #eee;
  margin-vertical: 20;
  border-radius: 20px;
  margin-horizontal: 10;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000000;
`;

export const IconContainer = styled.TouchableOpacity`
  z-index: 1;
`;

export const HeartIcon = styled(Heart).attrs({
  width: 20,
  height: 20,
  color: 'rgb(255, 42, 36);',
})``;

export const HeartFilledIcon = styled(HeartFilled).attrs({
  width: 20,
  height: 20,
  color: 'rgb(255, 42, 36);',
})``;
