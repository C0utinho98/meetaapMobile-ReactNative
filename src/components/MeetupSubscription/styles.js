import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  margin: 20px 0 5px;
  border-radius: 4px;
  background: #eee;
`;

export const Info = styled.View`
  padding: 20px;
`;

export const ImageMeetup = styled.Image`
  width: 100%;
  height: 150px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Span = styled.Text`
  align-content: center;
  margin-bottom: 10px;
  color: #808080;
`;

export const SubmitButton = styled(Button)`
  background: #e5556e;
  margin-top: 5px;
`;

export const Icons = styled.Image`
  width: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})``;
