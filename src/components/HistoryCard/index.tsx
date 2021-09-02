import React from 'react';

import { Container, Title, Amount } from './styles';

interface Props {
  title: string;
  amount: string;
  color: string;
}

export function HistoryCard({ color, title, amount }: Props) {
  return (
    <Container
      color={color}
      style={{ borderRadius: 5, borderLeftWidth: 5, borderLeftColor: color }}
    >
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
