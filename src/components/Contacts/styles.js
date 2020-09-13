import styled from 'styled-components/native';

export const Container = styled.View`
  background: #1e222b;
`;

export const SeparationLine = styled.View`
  align-items: center;
`;

export const Line = styled.View`
  width: 80%;
  justify-content: center;
  align-items: baseline;
  border: 0.3px solid;
  border-color: rgba(255, 255, 255, 0.6);
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  padding: 10px 10px;
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CardHeader = styled.View`
  /* justify-content: center; */
  align-items: center;
`;

export const Emoji = styled.Image`
  width: 130px;
  height: 115px;
  border-radius: 38px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  padding: 15px;
`;

export const CardBody = styled.Text`
  font-size: 14px;
  color: #fff;
  margin: 0 0 10px 10px;
  text-align: center;
  width: 250px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 1px solid rgba(255, 255, 255, 0.6); */
  width: 150px;
  height: 45px;
  border-radius: 25px;
  margin: 10px 10px;
  background-color: #00AC4A;
`;

export const ActionLabel = styled.Text`
  font-size: 14px;
  color: #fff;
`;