import React, { Component } from 'react';
// import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

export default class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  render() {
    return (
      <Container>
        <Product>
          <ProductImage
            source={{
              uri:
                'https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280',
            }}
          />
          <ProductTitle>Tênis Legal</ProductTitle>
          <ProductPrice>R$199,90</ProductPrice>
          <AddButton>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <ProductAmountText>0</ProductAmountText>
            </ProductAmount>
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </Product>
      </Container>
    );
  }
}
