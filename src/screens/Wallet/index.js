import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeBottom,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButtom,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
  UseTicketContainer
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
  const [ isVisible, setIsVisible ] = useState(true);
  const [ useBalance, setUseBalance ] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState) => !prevState );
  };

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState )
  };

    return (
      <Wrapper>
        <Header 
          colors={
            useBalance
              ? ['#52e78c', '#1ab563']
              : ['#d3d3d3', '#868686']
          } >
          <HeaderContainer>
            <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{ isVisible ? '0,00' : '----' }</Bold>
              </Value>

              <EyeBottom onPress={handleToggleVisibility} >
                <Feather name={isVisible ? "eye" : "eye-off"} size={28} color="#fff" />
              </EyeBottom>
            </BalanceContainer>

            <Info>
              Seu saldo esta rendendo 100% do CDI
            </Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff" />
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>

          </HeaderContainer>
        </Header>
        <UseBalance>
          <UseBalanceTitle>
            Usar saldo ao pagar
          </UseBalanceTitle>

          <Switch 
            value={useBalance}
            onValueChange={handleToggleUseBalance}
          />
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>
            Forma de pagamento
          </PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>
                  Cadastre seu cartao de credito
                </CardTitle>

                <CardInfo>
                  Cadastre um cartao de credito para fazer pagamento mesmo quando nao tiver saldo no seu PicPay.
                </CardInfo>
              </CardDetails>

              <Img source={creditCard} resizeMode="contain" />
            </CardBody>

            <AddButtom>
              <AntDesign name="pluscircle" size={30} color="#0db060" />
              <AddLabel>Adicionar cartao de credito</AddLabel>
            </AddButtom>
          </Card>

          <UseTicketContainer>
            <UseTicketButton>
              <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
              <UseTicketLabel>
                Usar codigo promocional
              </UseTicketLabel>
            </UseTicketButton>
          </UseTicketContainer>
        </PaymentMethods>
      </Wrapper>
    );
}
