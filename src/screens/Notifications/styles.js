import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 25px 25px 20px 20px;
`;

export const Header = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Option = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
  /* border: 1px solid #fff; */
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #00AC4A;
`;
