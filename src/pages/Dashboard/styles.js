import styled from 'styled-components/native';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin: 30px 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;

export const ButtonDate = styled.TouchableOpacity``;

export const Navigator = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
`;

export const Icon = styled(MDIcon).attrs(({...rest}) => ({
  ...rest,
  size: 30,
}))`
  color: #fff;
`;
