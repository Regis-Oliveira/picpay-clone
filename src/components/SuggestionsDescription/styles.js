import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingleft: 5,
  },
}))`
  background: #1e222b;
`;

export const Option = styled.TouchableOpacity`
  width: 350px;
  margin: 10px;
  flex-direction: row;
`;

export const Img = styled.Image``;

export const Label = styled.Text`
  border: 2px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding-left: 20px;
  align-self: baseline;
`;
  
export const Description = styled.Text`
  font-size: 12px;
  align-items: center;
  color: #fff;
`;
