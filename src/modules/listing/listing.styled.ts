import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
`;
export const HeaderContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5;
  margin-top: 10;
  padding-horizontal: 10;
`;

export const CountContainer = styled(HeaderContainer)`
  margin-bottom: 15;
  margin-top: 15;
`;

export const Count = styled.View`
  border: 1px solid #eee;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 20;
  margin-bottom: 5;
`;

export const CountTitle = styled.Text`
  font-size: 15;
`;

export const ResetButton = styled.TouchableOpacity`
  border: 1px solid #e1634f;
  background-color: #ff3891;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
