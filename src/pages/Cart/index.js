import React from 'react';
// import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubTotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const products = [];

  return (
    <Container>
      {products.length ? (
        <>
          <Products>
            <Product>
              <ProductInfo>
                <ProductImage
                  source={{
                    uri:
                      'https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe1.jpg?resize=280:280',
                  }}
                />
                <ProductDetails>
                  <ProductTitle>Tênis Massa</ProductTitle>
                  <ProductPrice>R$ 199,90</ProductPrice>
                </ProductDetails>
                <ProductDelete>
                  <Icon
                    name="delete-forever"
                    size={24}
                    color={colors.primary}
                  />
                </ProductDelete>
              </ProductInfo>
              <ProductControls>
                <ProductControlButton>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </ProductControlButton>
                <ProductAmount value={String(1)} />
                <ProductControlButton>
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </ProductControlButton>
                <ProductSubTotal>500,00</ProductSubTotal>
              </ProductControls>
            </Product>
          </Products>
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>R$1.000,00</TotalAmount>
            <Order>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </Order>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}
