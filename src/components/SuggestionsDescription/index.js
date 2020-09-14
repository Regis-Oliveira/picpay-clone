import React from 'react';
import { Container, Option, Img, Label, Description, Card, Detail } from './styles';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: 'Recarga de Celular',
    Description: 'Vivo, Claro, Tim, Oi, Nextel',
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Uber Pré Pago',
    Description: 'Quer uma carona, estamos a 1 clique de distância, baixe o aplicativo e nos chame!!!',
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Onibus',
    Description: 'Abasteça seu cartão de recarga agora mesmo',
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'TV',
    Description: 'Seus canais favoritos',
  },
  {
    key: String(Math.random()),
    img: img5,
    label: 'Central de Doações',
    Description: 'Ajude quem mais precisa!!!',
  },
  {
    key: String(Math.random()),
    img: img6,
    label: 'Pagar Conta',
    Description: 'Pague sua conta de água, luz, boletos bancários, etc. ',
  },
  {
    key: String(Math.random()),
    img: img7,
    label: 'FAQ',
    Description: '--------',
  },
];

export default function SuggestionsDescription() {
  return (
    <Container>
      {items.map((item) => (
        <Card>
          <Option key={item.key}>
            <Img source={item.img} />
          <Detail>
            <Label>{item.label}</Label>
            <Description>{item.Description}</Description>
          </Detail>
          </Option>
        </Card>
      ))}
    </Container>
  );
}
