import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingleft: 5,
  },
}))`
  background: #1e222b;
`;
export const Card = styled.View`
  flex:1;
`;

export const Option = styled.TouchableOpacity`
  width: 350px;
  margin: 12px;
  flex-direction: row;
  /* background: rgba(255, 255, 255, 0.1); */
`;

export const Detail = styled.View`
  padding-left: 18px;
  width: 270px;
  /* background: rgba(255, 255, 255, 0.1); */
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 4px;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #fff;
  margin-right: 10px;
  padding: 5px;
  line-height: 20px;
`;

export const Img = styled.Image``;  

