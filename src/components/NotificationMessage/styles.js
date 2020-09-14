import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
}))`
  flex: 1;
  background: #1e222b;
`;

export const Message = styled.TouchableOpacity`
  margin: 10px;
  justify-content: center;
`;

export const TextBody = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: left;

  padding: 10px 20px;
`;

export const DateMessage = styled.Text`
  font-size: 12px;
  color: #fff;

  padding: 10px 20px;
`;

export const SeparationLine = styled.View`
  align-items: center;
`;

export const Line = styled.View`
  width: 90%;
  justify-content: center;
  align-items: baseline;
  border: 0.3px solid;
  border-color: rgba(255, 255, 255, 0.6);
`;