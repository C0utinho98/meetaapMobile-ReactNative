import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Separetor = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
  showVerticalIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  background: #e5556e;
  margin-top: 5px;
`;
export const LogoutButton = styled(Button)`
  background: #d44059;
  margin-top: 15px;
`;
