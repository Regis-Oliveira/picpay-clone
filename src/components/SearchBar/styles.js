import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  width: 200px;
  height: 50px;
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  border-width: 10px;
  border-color: #fff;
  font-size: 16px;
  margin-left: 20px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ButtonIcon = styled(Icon)`
  font-size: 14px;
  color: #fff;
`;